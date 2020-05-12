/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IpoitemComponent } from './ipoitem.component';

describe('IpoitemComponent', () => {
  let component: IpoitemComponent;
  let fixture: ComponentFixture<IpoitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
