import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTestComponent } from './comments-test.component';

describe('CommentsTestComponent', () => {
  let component: CommentsTestComponent;
  let fixture: ComponentFixture<CommentsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
