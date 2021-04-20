import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalDesignComponent } from './mechanical-design.component';

describe('MechanicalDesignComponent', () => {
  let component: MechanicalDesignComponent;
  let fixture: ComponentFixture<MechanicalDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
