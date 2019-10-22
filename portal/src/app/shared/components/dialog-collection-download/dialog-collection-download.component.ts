import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-collection-download',
  templateUrl: './dialog-collection-download.component.html',
  styleUrls: ['./dialog-collection-download.component.scss']
})
export class DialogCollectionDownloadComponent implements OnInit {

  public collection_name: string;
  public features: object[];
  public assetsCheckboxes: object[];

  constructor(
    public dialogRef: MatDialogRef<DialogCollectionDownloadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) {
    this.collection_name = data['collection_name'];
    this.features = data['features'];
    this.assetsCheckboxes = [];

    // how all features have the same structure, then get the first one in order to get the assets list
    let feature: object = this.features[0];

    this.getKeysFromObject(feature['assets']).forEach(
      (asset: string) => {
        // create a assets checkbox list with all assets checked to true
        this.assetsCheckboxes.push({ 'name': asset, 'checked': true });
      }
    );
  }

  ngOnInit() {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  private getAssetsToDownload (assetsCheckboxes: object[]): object[] {
    // get the assets to download

    let assets_to_download = [];

    assetsCheckboxes.forEach((asset: object) => {
      // if this asset was checked, then...
      if (asset['checked']) {
        // get the asset name
        let asset_name = asset['name'];

        // ... iterate 'features' in order to get the assets of the features according to the selected assets
        this.features.forEach((feature: object) => {
          // get the assets array memory reference
          let assets = feature['assets'];

          // select just the assets that are inside 'assets' object
          if (asset_name in assets) {
            assets_to_download.push(assets[asset_name]);
          }
        });
      }
    });

    return assets_to_download;
  }

  public downloadCollection(): void {
    console.log('\n\ndownloadAssets()');
    console.log('this.collection_name: ', this.collection_name);
    console.log('this.features: ', this.features);
    console.log('this.assetsCheckboxes: ', this.assetsCheckboxes);

    // get the assets to download
    let assets_to_download = this.getAssetsToDownload (this.assetsCheckboxes);

    console.log('assets_to_download: ', assets_to_download);
  }

  public getKeysFromObject(object: Object): Array<string> {
    // get the keys of an 'object' and sort the array
    return Object.keys(object).sort();
  }

}
