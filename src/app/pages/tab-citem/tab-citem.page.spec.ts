import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCitemPage } from './tab-citem.page';

describe('TabCitemPage', () => {
  let component: TabCitemPage;
  let fixture: ComponentFixture<TabCitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
