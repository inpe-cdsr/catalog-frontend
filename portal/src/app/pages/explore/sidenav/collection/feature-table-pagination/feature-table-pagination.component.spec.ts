import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTablePaginationComponent } from './feature-table-pagination.component';

describe('FeatureTablePaginationComponent', () => {
  let component: FeatureTablePaginationComponent;
  let fixture: ComponentFixture<FeatureTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
