import { Book } from "../models/book";

export interface AppState {
  readonly books: Book[];
}
