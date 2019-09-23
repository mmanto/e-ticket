import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComprobantePage } from './tab-comprobante.page';

describe('TabComprobantePage', () => {
  let component: TabComprobantePage;
  let fixture: ComponentFixture<TabComprobantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabComprobantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComprobantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
