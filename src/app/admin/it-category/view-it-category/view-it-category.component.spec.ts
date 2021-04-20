import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItCategoryComponent } from './view-it-category.component';

describe('ViewItCategoryComponent', () => {
  let component: ViewItCategoryComponent;
  let fixture: ComponentFixture<ViewItCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
