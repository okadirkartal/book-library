import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BookService {
  _baseURL: string = "api/Books";

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL);
  }

  addBook(book: Book) {
    return this.http.post(this._baseURL, book);
  }

  getBookById(id: number) {
    return this.http.get<Book>(`${this._baseURL}/Book/${id}`);
  }

  updateBook(book: Book) {
    return this.http.put(`${this._baseURL}/UpdateBook/${book.id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this._baseURL}/DeleteBook/${id}`);
  }
}
