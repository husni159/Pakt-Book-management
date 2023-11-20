import { Component, OnInit, Input,Output, SimpleChanges,EventEmitter, OnChanges } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {
  @Input() books: any[] = []; 
  @Input() filters: any;

  currentPage = 1; 
  totalPages = 0;

  filterValues: any = {
    title: '',
    author: '',
    publication_date: '',
    isbn: '',
    genre: ''
  };
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }


  getBooks(): void {
    this.bookService.getBooks(this.currentPage, this.filterValues).subscribe(
      (response) => {
        if(response.status) {
          this.books = response.details.data
          this.currentPage = response.details.current_page 
          this.totalPages  = response.details.last_page
        } else {
          console.log('Error fetching books');
        }
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  onFiltersChanged(filters: any) {
    this.filterValues = filters
    this.getBooks();   
  }
  
  //pagination 
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getBooks();
  }

}
