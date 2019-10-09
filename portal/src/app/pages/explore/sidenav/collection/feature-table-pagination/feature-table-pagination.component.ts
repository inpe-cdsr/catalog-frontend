import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Feature } from '../collection.interface';


@Component({
  selector: 'app-feature-table-pagination',
  templateUrl: './feature-table-pagination.component.html',
  styleUrls: ['./feature-table-pagination.component.scss']
})
export class FeatureTablePaginationComponent implements OnInit {

  displayedColumns: string[] = ['collection', 'id'];
  dataSource: MatTableDataSource<Feature>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() features: Array<Feature> = [];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Feature>(this.features);
    this.dataSource.paginator = this.paginator;
  }

}
