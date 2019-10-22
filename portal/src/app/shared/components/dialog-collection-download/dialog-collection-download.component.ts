import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';


function downloadFile(filename: string, data: string, type = 'text/plain;charset=utf-8'): void {
  // Source: https://stackoverflow.com/a/33542499
  // this function works with any browser

  // create a blob that contains the 'data'
  let blob = new Blob([ data ], { type: type });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    // create a new element 'a' to put on the DOM and download the file
    let element = window.document.createElement('a');

    // add the URL and the filename to the 'element'
    element.href = window.URL.createObjectURL(blob);
    element.download = filename;

    // not show element on the screen
    element.style.display = 'none';

    // add 'element' on the DOM
    document.body.appendChild(element);
    // click on it, in order to download the file
    element.click();
    // remove it from DOM
    document.body.removeChild(element);
  }
}

function downloadFile2(filename: string, data: string, type = 'text/plain;charset=utf-8'): void {
  // Source: https://stackoverflow.com/a/18197341

  // create a new element 'a' to put on the DOM and download the file
  let element = document.createElement('a');

  // default 'data' is equal to 'data:text/plain;charset=utf-8,'
  element.setAttribute('href', `data:${type},` + encodeURIComponent(data));
  element.setAttribute('download', filename);

  element.style.display = 'none';

  // add 'element' on the DOM, click on it and remove it from DOM
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


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

  private getAssetsLinksToDownload (assetsCheckboxes: object[]): string[] {
    // get the assets to download

    let links_to_download = [];

    assetsCheckboxes.forEach((asset: object) => {
      // if this asset was checked, then...
      if (asset['checked']) {
        // get the asset name
        let asset_name = asset['name'];

        // ... iterate 'features' in order to get the assets of the features according to the selected assets
        this.features.forEach((feature: object) => {
          // get the assets array memory reference
          let assets = feature['assets'];

          // select just the links of assets that are inside 'assets' object
          if (asset_name in assets) {
            links_to_download.push(assets[asset_name].href);
          }
        });
      }
    });

    return links_to_download;
  }

  public downloadCollection(): void {
    // get the assets links to download
    let links_to_download: string[] = this.getAssetsLinksToDownload(this.assetsCheckboxes);

    // join the links in just one string separate by '\n' (print each link on one line)
    let joined_links_to_download: string = links_to_download.join('\n');

    // get 'now' moment (e.g. 2019_10_22_11_59_12_am)
    let now = moment().format('YYYY_MM_DD_h_mm_ss_a');

    // create a file name based on 'now' moment
    let filename = `${now}_${this.collection_name}_collection.txt`;

    // download a file with the assets links
    downloadFile(filename, joined_links_to_download);
  }

  public getKeysFromObject(object: Object): Array<string> {
    // get the keys of an 'object' and sort the array
    return Object.keys(object).sort();
  }

}
