import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHiringComponent } from './view-hiring.component';

describe('ViewHiringComponent', () => {
  let component: ViewHiringComponent;
  let fixture: ComponentFixture<ViewHiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
