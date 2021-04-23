import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
    this.getBooks()
  }
  getBooks()
  {
    this.bookCRUDService.retrieveBooks().subscribe((data) => {
      this.books = data;
    });
  }
  //Function to delete a book
  deleteBook(_id: string){
    this.bookCRUDService.deleteBook(_id).subscribe(data => console.log(data));
    window.location.reload();

  }
  //Function to edit a book
  editBook(wholeForm: NgForm, id:any){

    let form = {
      title: wholeForm.value.title.trim(),
      author: wholeForm.value.author.trim(),
      description: wholeForm.value.description.trim(),
      image: wholeForm.value.image.trim()
    }

    if ( form.title == "" || form.author == ""|| form.description == "" || form.image == ""){
    }else{
      this.bookCRUDService.updateBook(id,form).subscribe();
    }
    window.location.reload();

  }
//Function that opens a modal which is used for editing book
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
//Function that closes a modal which is used for editing book
  closeModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.hide(9);
  }
}
