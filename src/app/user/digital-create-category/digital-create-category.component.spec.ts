import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCreateCategoryComponent } from './digital-create-category.component';

describe('DigitalCreateCategoryComponent', () => {
  let component: DigitalCreateCategoryComponent;
  let fixture: ComponentFixture<DigitalCreateCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCreateCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
