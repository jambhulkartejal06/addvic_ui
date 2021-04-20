import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipCreateCategoryComponent } from './intership-create-category.component';

describe('IntershipCreateCategoryComponent', () => {
  let component: IntershipCreateCategoryComponent;
  let fixture: ComponentFixture<IntershipCreateCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipCreateCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
