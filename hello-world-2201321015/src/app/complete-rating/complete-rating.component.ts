import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-rating',
  standalone: true,
  imports: [],
  templateUrl: './complete-rating.component.html',
  styleUrl: './complete-rating.component.css'
})
export class CompleteRatingComponent {

  constructor(private router: Router) {
  } 

  public repeatRating() {

    this.router.navigate(['/rating-page-component']);
  }

  public completeJob() {

    this.router.navigate(['/job-completed-component']);
  }
}
