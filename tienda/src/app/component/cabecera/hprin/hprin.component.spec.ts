/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HprinComponent } from './hprin.component';

describe('HprinComponent', () => {
  let component: HprinComponent;
  let fixture: ComponentFixture<HprinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HprinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
