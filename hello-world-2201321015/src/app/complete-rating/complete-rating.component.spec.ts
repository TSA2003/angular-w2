import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRatingComponent } from './complete-rating.component';

describe('CompleteRatingComponent', () => {
  let component: CompleteRatingComponent;
  let fixture: ComponentFixture<CompleteRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
