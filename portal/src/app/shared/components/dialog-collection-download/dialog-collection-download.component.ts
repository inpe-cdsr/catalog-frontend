import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as moment from 'moment';

import { downloadFile } from 'src/app/shared/helpers/common';


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
