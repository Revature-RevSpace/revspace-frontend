import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavingEditAlertComponent } from './leaving-edit-alert.component';

describe('LeavingEditAlertComponent', () => {
  let component: LeavingEditAlertComponent;
  let fixture: ComponentFixture<LeavingEditAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavingEditAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavingEditAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
