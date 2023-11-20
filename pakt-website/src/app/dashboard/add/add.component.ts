import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  bookForm!: FormGroup;
  publication_date!: NgbDateStruct; 

  constructor(private formBuilder: FormBuilder, private bookService: BookService, 
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publication_date: ['', Validators.required],
      isbn: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe(
        (response) => {
          alert('Book added successfully')
           
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          alert('Failed to add book')
        }
      );
    } else {
      console.error('Invalid form submission. Please check the form.');
    }
  }
}
