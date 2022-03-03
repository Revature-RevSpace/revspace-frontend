import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileComponentComponent } from './view-profile-component.component';

describe('ViewProfileComponent', () => {
  let component: ViewProfileComponentComponent;
  let fixture: ComponentFixture<ViewProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


