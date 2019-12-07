import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution7Component } from './solution7.component';

describe('Solution7Component', () => {
  let component: Solution7Component;
  let fixture: ComponentFixture<Solution7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solution7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
