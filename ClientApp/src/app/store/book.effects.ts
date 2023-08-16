import { Actions, ofType, } from "@ngrx/effects";
import {  Action } from "@ngrx/store";
import { mergeMap, Observable, map } from "rxjs";
import { BookService } from "../services/book.service";
import * as types from './action.types';
import * as bookActions from './book.actions';
import { Book } from '../models/book';


export class BookEffects {

  constructor(private service : BookService, private actions$: Actions){}

     loadBooks$:Observable<Action> =
    this.actions$.pipe(
      ofType<bookActions.loadBooksActions>(types.LOAD_BOOKS),
      mergeMap(() =>
          this.service.getAllBooks().pipe(map(books =>
            new bookActions.loadBooksSuccessActions(books)))
      )
    );

    deleteBook$:Observable<Action> =
    this.actions$.pipe(
      ofType<bookActions.deleteBookAction>(types.DELETE_BOOK),
      mergeMap(action =>
          this.service.deleteBook(action.payload).pipe(map((bookId) =>
            new bookActions.deleteBookSuccessAction(parseInt(bookId.toString()))))
      )
    );
}
