import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerifyconditionsComponent } from './otp-verifyconditions.component';

describe('OtpVerifyconditionsComponent', () => {
  let component: OtpVerifyconditionsComponent;
  let fixture: ComponentFixture<OtpVerifyconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpVerifyconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVerifyconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
