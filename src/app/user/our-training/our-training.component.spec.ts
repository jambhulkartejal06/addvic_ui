import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTrainingComponent } from './our-training.component';

describe('OurTrainingComponent', () => {
  let component: OurTrainingComponent;
  let fixture: ComponentFixture<OurTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
