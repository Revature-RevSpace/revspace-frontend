import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponentComponent } from './change-password-component.component';

describe('ChangePasswordComponentComponent', () => {
  let component: ChangePasswordComponentComponent;
  let fixture: ComponentFixture<ChangePasswordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
