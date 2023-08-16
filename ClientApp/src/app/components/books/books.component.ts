import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/store/app.state';
import { Book } from '../../models/book';
import * as bookActions from '../../store/book.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books : Book[] = [];
  public books$!: Observable<any>;

  constructor(private store: Store<AppState>, private service : BookService, private router: Router) {
    this.books$ = this.store.select(state => state.books);
  }


  ngOnInit(): void {
   this.store.dispatch(new bookActions.loadBooksActions())
   this.books$.subscribe((state: AppState) => this.books = state.books);

  }

  showBook(id: number){
    this.router.navigate(["/show-book/",id]);
  }

  updateBook(id: number){
    this.router.navigate(["/update-book/",id]);
  }

  deleteBook(id: number){
    this.router.navigate(["/delete-book/",id]);
  }
}
