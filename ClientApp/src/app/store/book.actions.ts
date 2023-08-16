import { Action } from "@ngrx/store";
import { Book } from "../models/book";
import * as types from './action.types';

export class loadBooksActions implements Action {

  readonly type = types.LOAD_BOOKS;

  constructor(){}
}


export class loadBooksSuccessActions implements Action {

  readonly type = types.LOAD_BOOKS_SUCCESS;

  constructor(public payload: Book[]) {}
}

export class deleteBookAction implements Action {

  readonly type = types.DELETE_BOOK;

  constructor(public payload: number){}
}

export class deleteBookSuccessAction implements Action {

  readonly type = types.DELETE_BOOK_SUCCESS;

  constructor(public payload: number){}
}

export type Actions = loadBooksActions | loadBooksSuccessActions | deleteBookAction | deleteBookSuccessAction;
