import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookCRUDService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formData: FormGroup;
  constructor(private formBuilder: FormBuilder, private bookCRUDService: BookCRUDService, private router: Router) {
    this.formData = this.formBuilder.group({
      title: [''],
      author : [''],
      description: [''],
      image: ['']
    });

    
   }

  ngOnInit(): void {
  }
  //Function that adds books to the database
  
addBook(){
if (this.formData.value.title =="" || this.formData.value.author=="" || this.formData.value.description=="" || this.formData.value.image ==""){
console.log("Required fields")

}
else
{
  //Adds a books if none of inputed values are empty
  this.bookCRUDService.addBook(this.formData.value).subscribe();
  this.router.navigate(['/books']);
}


}
}
