import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  public books = [
    {title: 'A', description: 'A', author: 'A', totalRating: 0, rateNumber: 0},
    {title: 'B', description: 'B', author: 'B', totalRating: 0, rateNumber: 0},
    {title: 'C', description: 'C', author: 'C', totalRating: 0, rateNumber: 0},
    {title: 'D', description: 'D', author: 'D', totalRating: 0, rateNumber: 0},
    {title: 'E', description: 'E', author: 'E', totalRating: 0, rateNumber: 0}
  ];
}
