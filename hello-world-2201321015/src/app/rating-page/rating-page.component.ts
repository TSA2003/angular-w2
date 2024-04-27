import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-rating-page',
  standalone: true,
  imports: [],
  templateUrl: './rating-page.component.html',
  styleUrl: './rating-page.component.css'
})
export class RatingPageComponent {
  
  public index = 0;

  public tempTitle;
  public tempDescription;
  public tempAuthor;
  public tempRating;
  public books;

  constructor(private router: Router, private bookDataService: BookDataService) {
    this.books = this.bookDataService.books;
    this.loadBookData();    
  } 



  private nextBook() {

    this.index++;

    if (this.index >= this.books.length) {

      this.router.navigate(['/complete-rating-component']);
      this.index = 0;
    }   
  }

  private loadBookData() {

    this.tempTitle = this.books[this.index].title;
    this.tempDescription = this.books[this.index].description;
    this.tempAuthor = this.books[this.index].author;
    this.tempRating = this.books[this.index].totalRating / this.books[this.index].rateNumber;
    
    if(Number.isNaN(this.tempRating)) {
      this.tempRating = 0;
    }
  }

  private saveBookData() {

    this.books[this.index].title = this.tempTitle;
    this.books[this.index].description = this.tempDescription;
    this.books[this.index].author = this.tempAuthor;
    this.books[this.index].totalRating += this.tempRating;
    this.books[this.index].rateNumber++;
  }

  public processInputBookTitle(input) {

    this.tempTitle = input.target.value;
  }

  public processInputBookDescription(input) {

    this.tempDescription = input.target.value;
  }

  public processInputBookAuthor(input) {

    this.tempAuthor = input.target.value;
  }

  public rateBook(input) {

    this.tempRating = input;
    this.saveBookData();
    this.nextBook();
    this.loadBookData();
  }
}
