import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, Output, EventEmitter} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {Store} from '@ngrx/store';

// service
import { SearchService } from '../search/search.service';

// state management
import { ExploreState } from '../../explore.state';
import {
  setDatasetSelectedCollections,
  setProvidersInfos,
  showLoading,
  closeLoading
} from '../../explore.action';

// interface
import { StacCollection } from 'src/app/shared/helpers/interface';

// other
import { isObjectEmpty } from 'src/app/shared/helpers/common';

/**
 * Node for item
 */
export class ItemNode {
  children: ItemNode[];
  item: string;
}

/** Flat item node with expandable and level information */
export class ItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
  parent: ItemFlatNode;
}

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<ItemNode[]>([]);

  /** available providers */
  public providers: string[];

  /** original collections by providers returned by stac-compose */
  private providersCollections: object;

  /** collections by providers to build the tree */
  private _providersCollectionsTree: object;

  get data(): ItemNode[] {
    return this.dataChange.value;
  }

  get providersCollectionsTree(): object {
    return this._providersCollectionsTree;
  }

  set providersCollectionsTree(newValue: object) {
      this._providersCollectionsTree = newValue;
  }

  constructor(
    private ss: SearchService,
    private store: Store<ExploreState>
  ) {
    // this method is called inside the DatasetComponent constructor
    // this.initialize();
  }

  /** getting available provider */
  getProvidersCollections() : object{
    return this.providersCollections;
  }

  /** getting available provider */
  async initialize() {
    // get providers and collections from the server
    await this.getProvidersFromTheServer();
    await this.getProvidersCollectionsFromTheServer(this.providers);

    // Build the tree nodes from Json object.
    // The result is a list of `ItemNode` with nested
    // file node as children.
    const data = this.buildFileTree(this.providersCollectionsTree, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /** getting available provider */
  private async getProvidersFromTheServer() {
    try {
      this.store.dispatch(showLoading());

      const response = await this.ss.getProviders();
      this.providers = Object.keys(response.providers);

      this.store.dispatch(setProvidersInfos(response.providers));
    } catch(err) {
      console.log('getProviders() error: ', err);
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  /** getting available collections */
  private async getProvidersCollectionsFromTheServer(providers: string[]) {
    // when there is not one provider, it is not necessary to request collections to the server
    if (providers.length === 0)
      return;

    try {
      this.store.dispatch(showLoading());

      // get the collection information by each provider from stac-compose
      this.providersCollections = await this.ss.getCollections(providers);

      this.providersCollectionsTree = {};

      // build the `providersCollectionsTree` structure where:
      // the key is the provider name and the value is the collection names
      for (let provider of this.providersCollections['providers']) {
        const collection_ids = provider.collections.map(collection => collection.id);
        this.providersCollectionsTree[provider.id] = collection_ids;
      }

    } catch(err) {
      console.log('getCollections() error: ', err);

    } finally {
      this.store.dispatch(closeLoading());

    }
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `ItemNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): ItemNode[] {
    return Object.keys(obj).reduce<ItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new ItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

/**
 * @title Tree with checkboxes
 */
@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss'],
  providers: [ChecklistDatabase]
})
export class DatasetComponent {
  /** emit event to sidenav */
  @Output() stepToEmit = new EventEmitter();

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<ItemFlatNode, ItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<ItemNode, ItemFlatNode>();

  treeControl: FlatTreeControl<ItemFlatNode>;

  treeFlattener: MatTreeFlattener<ItemNode, ItemFlatNode>;

  dataSource: MatTreeFlatDataSource<ItemNode, ItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<ItemFlatNode>(true /* multiple */);

  /** which collections were selected after post processing */
  selectedCollections: object;

  /** original collections by providers returned by stac-compose */
  private providersCollections: object;

  constructor(
    private _database: ChecklistDatabase,
    private store: Store<ExploreState>,
    private snackBar: MatSnackBar,
  ) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<ItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });

    _database.initialize().then(() => {
      // just get the collections by providers after async initialize method runs
      this.providersCollections = _database.getProvidersCollections();
    }).catch(err => {
      console.log(err);
    });
  }

  getLevel = (node: ItemFlatNode) => node.level;

  isExpandable = (node: ItemFlatNode) => node.expandable;

  getChildren = (node: ItemNode): ItemNode[] => node.children;

  hasChild = (_: number, _nodeData: ItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: ItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node.
   * Record the nodes in maps for later use.
   */
  transformer = (node: ItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new ItemFlatNode();

    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;

    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);

    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: ItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);

    const descAllSelected = descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });

    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);

    const result = descendants.some(child => {
      return this.checklistSelection.isSelected(child);
    });

    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: ItemFlatNode): void {
    // set parent reference
    node.parent = this.getParentNode(node);

    // add or remove node from 'checklistSelection'
    this.checklistSelection.toggle(node);

    let descendants: ItemFlatNode[] = this.treeControl.getDescendants(node);

    // set parent reference (i.e. selected node) to all my descendants
    descendants.forEach((descendant: ItemFlatNode) => {
      descendant.parent = node;
    });

    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });

    this.checkAllParentsSelection(node);

    this.activeEventWhenUserClicksOnTheCheckbox()
  }

  /** Toggle a leaf item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: ItemFlatNode): void {
    // set parent reference
    node.parent = this.getParentNode(node);

    // add or remove node from 'checklistSelection'
    this.checklistSelection.toggle(node);

    this.checkAllParentsSelection(node);

    this.activeEventWhenUserClicksOnTheCheckbox()
  }

  /** Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: ItemFlatNode): void {
    let parent: ItemFlatNode | null = this.getParentNode(node);

    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: ItemFlatNode): void {
    // set parent reference
    node.parent = this.getParentNode(node);

    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);

    // set parent reference (i.e. selected node) to all my descendants
    descendants.forEach((descendant: ItemFlatNode) => {
      descendant.parent = node;
    });

    const descAllSelected = descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /** Get the parent node of a node */
  getParentNode(node: ItemFlatNode): ItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  saveSelectedCollectionsInTheStore(): void {
    try {
      this.selectedCollections = {};
      const providersCollections = this._database.providersCollectionsTree;

      this.checklistSelection.selected.forEach((node: ItemFlatNode) => {
        // if 'node.level == 1', then this node is a collection
        if (node.level == 1) {
          // if I'm a collection, then my parent is a provider
          let provider = node.parent.item;

          // initialize 'selectedCollections' with 'provider' for the first time
          // (1) check if the provider is not inside the 'selectedCollections' object; and
          // (2) check if the provider was initialized before;
          // then create a new list of collections by using the provider as a key
          if (!(provider in this.selectedCollections) && (provider in providersCollections)) {
            this.selectedCollections[provider] = [];
          }

          // add the node (i.e. a collection) inside the list of collections using provider as a key
          this.selectedCollections[provider].push(node.item);
        }
      });

      // add the 'selectedCollections' in the store
      this.store.dispatch(setDatasetSelectedCollections(this.selectedCollections));

      // if the object is empty, then raise an exception
      if (isObjectEmpty(this.selectedCollections)) {
        throw new Error("You must choose at least one collection!");
      }
    } catch (err) {
      this.snackBar.open(err.message.toUpperCase(), '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-error'
      });
    }
  }

  activeEventWhenUserClicksOnTheCheckbox(): void{
    this.saveSelectedCollectionsInTheStore()
  }

  private getCollectionInformation(providerId: string, collectionId: string): StacCollection {
    // get the provider by title
    const provider = this.providersCollections['providers'].filter(
      provider => provider.id === providerId
    )[0];

    // get the collection by id
    return provider.collections.filter(
      collection => collection.id === collectionId
    )[0];
  }

  getTooltipMessage(node: ItemFlatNode): string {
    // get the parent, in other words, the provider node
    let parent = this.getParentNode(node);

    let collection = this.getCollectionInformation(parent.item, node.item);

    return `ID: ${collection.id}` +
            `\nStart date: ${collection.extent.temporal[0]}` +
            `\nEnd date: ${collection.extent.temporal[1]}` +
            `\nDescription: ${collection.description}`;
  }
}
