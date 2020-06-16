import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoFutureComponent } from './ipo-future.component';

describe('IpoFutureComponent', () => {
  let component: IpoFutureComponent;
  let fixture: ComponentFixture<IpoFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
