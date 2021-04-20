import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCoursesComponent } from './it-courses.component';

describe('ItCoursesComponent', () => {
  let component: ItCoursesComponent;
  let fixture: ComponentFixture<ItCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
