import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDigitalMarketingCategoryComponent } from './view-digital-marketing-category.component';

describe('ViewDigitalMarketingCategoryComponent', () => {
  let component: ViewDigitalMarketingCategoryComponent;
  let fixture: ComponentFixture<ViewDigitalMarketingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDigitalMarketingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDigitalMarketingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
