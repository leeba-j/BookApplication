import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookCRUDService {

  constructor(private httpClient: HttpClient) { }
API_URL = environment.API_URL
  addBook(bookData: any){
    return this.httpClient.post(this.API_URL+'books',bookData);
  }
}
