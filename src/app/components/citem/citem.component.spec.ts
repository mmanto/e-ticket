import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitemComponent } from './citem.component';

describe('CitemComponent', () => {
  let component: CitemComponent;
  let fixture: ComponentFixture<CitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
