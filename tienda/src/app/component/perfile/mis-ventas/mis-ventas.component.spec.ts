/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisVentasComponent } from './mis-ventas.component';

describe('MisVentasComponent', () => {
  let component: MisVentasComponent;
  let fixture: ComponentFixture<MisVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
