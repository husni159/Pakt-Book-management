import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filters: any = {
    title: '',
    author: '',
    publication_date: '',
    isbn: '',
    genre: ''
  };

  applyFilters() {
    this.filtersChanged.emit(this.filters);
  }

  clearFilters() {
    this.filters = {
      title: '',
      author: '',
      publication_date: '',
      isbn: '',
      genre: ''
    };
    this.applyFilters();
  }
}
