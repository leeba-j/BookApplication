import { Component, OnInit } from '@angular/core';
import { BookCRUDService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookCRUDService: BookCRUDService) {}
  books: any;
  ngOnInit(): void {
    this.bookCRUDService.retrieveBooks().subscribe((data) => {
      this.books = data;
    });
  }
  deleteBook(_id: string){
    this.bookCRUDService.deleteBook(_id).subscribe(data => console.log(data));

  }
}
