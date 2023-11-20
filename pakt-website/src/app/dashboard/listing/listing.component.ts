import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  response: object = {};
  status : boolean = false;
  books : any;
  book:any;
  isDeleted?: boolean;

  currentPage = 1; 
  totalPages = 0;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks(this.currentPage).subscribe(
      (response) => {
        if(response.status) {
          this.books = response.details.data
          this.currentPage = response.details.current_page 
          this.totalPages  = response.details.last_page
        }else{
          console.log('Error fetching books');
        }
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }
  addbook(): void {
    this.router.navigate(['/books/add']);
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  //pagination 
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getBooks();
  }
}
