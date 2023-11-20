
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  bookId: number = 0;
  book: any;
  bookForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = +params['id'];
      this.initForm();
      this.getBookDetails();
    });
  }

  initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publication_date: [''],
      isbn: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  getBookDetails(): void {
    this.bookService.getBookById(this.bookId).subscribe(
      (response) => {
        if(response.status) {
          this.bookForm.patchValue(response.details.book);
        }else{
          console.log('Error in fetching book details');
        }
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }

  updateBook(): void {
    if (this.bookForm.valid) {
      const updatedBook = this.bookForm.value;
      this.bookService.editBook(this.bookId, updatedBook).subscribe(
        (response) => {
          alert('Book updated successfully')    
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
    }
  }
 
}
