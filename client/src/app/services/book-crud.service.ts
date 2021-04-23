import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookCRUDService {

  constructor(private httpClient: HttpClient) { }
API_URL = environment.API_URL
//Method that allows a book to be added
  public addBook(bookData: any): Observable<Object>{
    return this.httpClient.post(this.API_URL+'books',bookData);
  }

  //Method that allows books to be retrieved
  public retrieveBooks(): Observable<Object>{
    return this.httpClient.get(this.API_URL+"allBooks")
  }
//Method that allows a book to be deleted
  public deleteBook(_id: any): Observable<Object>{
    return this.httpClient.delete(this.API_URL+`removeBook/${_id}`)
  }

  //Method that allows a book to be updated
  public updateBook(id: any, book:any): Observable<Object>{
    return this.httpClient.patch(this.API_URL+`updateBook/${id}`,book );
  }
}
