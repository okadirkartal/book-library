import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http : HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(`${environment.API_URL}/GetBooks`);
  }

  addBook(book: Book) {
    return this.http.post(`${environment.API_URL}/AddBook`, book);
  }

  getBook(id: number){
    return this.http.get<Book>(`${environment.API_URL}/SingleBook/${id}`);
  }

  updateBook(book: Book){
    return this.http.put(`${environment.API_URL}/UpdateBook/${book.id}`, book);
  }

  deleteBook(id: number){
    return this.http.delete(`${environment.API_URL}/DeleteBook/${id}`);
  }
}
