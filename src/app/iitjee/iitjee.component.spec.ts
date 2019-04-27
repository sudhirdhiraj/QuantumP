import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IitjeeComponent } from './iitjee.component';

describe('IitjeeComponent', () => {
  let component: IitjeeComponent;
  let fixture: ComponentFixture<IitjeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IitjeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IitjeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
