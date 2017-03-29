import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentPageComponent } from './table-of-content-page.component';

describe('TableOfContentPageComponent', () => {
  let component: TableOfContentPageComponent;
  let fixture: ComponentFixture<TableOfContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
