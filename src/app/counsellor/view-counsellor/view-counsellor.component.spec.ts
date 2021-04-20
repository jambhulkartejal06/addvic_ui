import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCounsellorComponent } from './view-counsellor.component';

describe('ViewCounsellorComponent', () => {
  let component: ViewCounsellorComponent;
  let fixture: ComponentFixture<ViewCounsellorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCounsellorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCounsellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
