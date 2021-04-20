import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCategoryComponent } from './it-category.component';

describe('ItCategoryComponent', () => {
  let component: ItCategoryComponent;
  let fixture: ComponentFixture<ItCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
