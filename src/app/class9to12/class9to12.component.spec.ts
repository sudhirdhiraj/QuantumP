import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class9to12Component } from './class9to12.component';

describe('Class9to12Component', () => {
  let component: Class9to12Component;
  let fixture: ComponentFixture<Class9to12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class9to12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class9to12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
