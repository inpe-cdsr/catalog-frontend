import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCollectionDownloadComponent } from './dialog-collection-download.component';

describe('DialogCollectionDownloadComponent', () => {
  let component: DialogCollectionDownloadComponent;
  let fixture: ComponentFixture<DialogCollectionDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCollectionDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCollectionDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
