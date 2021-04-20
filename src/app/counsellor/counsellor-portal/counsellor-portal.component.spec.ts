import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorPortalComponent } from './counsellor-portal.component';

describe('CounsellorPortalComponent', () => {
  let component: CounsellorPortalComponent;
  let fixture: ComponentFixture<CounsellorPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
