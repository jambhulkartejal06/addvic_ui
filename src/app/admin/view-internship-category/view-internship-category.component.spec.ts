import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternshipCategoryComponent } from './view-internship-category.component';

describe('ViewInternshipCategoryComponent', () => {
  let component: ViewInternshipCategoryComponent;
  let fixture: ComponentFixture<ViewInternshipCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInternshipCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInternshipCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
