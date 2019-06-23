import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrocceryComponent } from './add-groccery.component';

describe('AddGrocceryComponent', () => {
  let component: AddGrocceryComponent;
  let fixture: ComponentFixture<AddGrocceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrocceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrocceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
