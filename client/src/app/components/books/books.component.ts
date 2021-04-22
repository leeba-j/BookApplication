import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BookCRUDService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookCRUDService: BookCRUDService, private modalService: BsModalService, private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      title: [''],
      author : [''],
      description: [''],
      image: ['']
    })
  }
  books: any;
  formData: FormGroup;
  modalRef: BsModalRef | any;
  ngOnInit(): void {
    this.bookCRUDService.retrieveBooks().subscribe((data) => {
      this.books = data;
    });
  }
  deleteBook(_id: string){
    this.bookCRUDService.deleteBook(_id).subscribe(data => console.log(data));

  }
  editBook(){
    console.log(this.formData.value);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
