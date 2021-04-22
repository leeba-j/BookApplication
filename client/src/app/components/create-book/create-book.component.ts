import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookCRUDService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formData: FormGroup;
  constructor(private formBuilder: FormBuilder, private bookCRUDService: BookCRUDService) {
    this.formData = this.formBuilder.group({
      title: [''],
      author : [''],
      description: [''],
      image: ['']
    })
   }

  ngOnInit(): void {
  }
addBook(){
console.log(this.formData.value);
this.bookCRUDService.addBook(this.formData.value).subscribe(data => console.log(data))
}
}
