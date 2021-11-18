import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateFeedComponent } from './populate-feed.component';

describe('PopulateFeedComponent', () => {
  let component: PopulateFeedComponent;
  let fixture: ComponentFixture<PopulateFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulateFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulateFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
