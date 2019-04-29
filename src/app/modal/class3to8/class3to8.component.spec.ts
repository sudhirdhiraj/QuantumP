import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class3to8Component } from './class3to8.component';

describe('Class3to8Component', () => {
  let component: Class3to8Component;
  let fixture: ComponentFixture<Class3to8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class3to8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class3to8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
