import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItCoursesComponent } from './view-it-courses.component';

describe('ViewItCoursesComponent', () => {
  let component: ViewItCoursesComponent;
  let fixture: ComponentFixture<ViewItCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
