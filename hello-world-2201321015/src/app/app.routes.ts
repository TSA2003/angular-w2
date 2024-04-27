import { Routes } from '@angular/router';
import { CompleteRatingComponent } from './complete-rating/complete-rating.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { JobCompletedComponent } from './job-completed/job-completed.component';

export const routes: Routes = [
    { path: 'rating-page-component', component: RatingPageComponent },
    { path: 'complete-rating-component', component: CompleteRatingComponent },
    { path: 'job-completed-component', component: JobCompletedComponent },
    { path: '',   redirectTo: '/rating-page-component', pathMatch: 'full' }
];
