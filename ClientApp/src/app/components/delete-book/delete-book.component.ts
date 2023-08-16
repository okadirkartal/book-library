import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/store/app.state';
import * as bookActions from '../../store/book.actions';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private store: Store<AppState>,private route: ActivatedRoute, private router : Router, private service: BookService) { }

  book!: Book;

  ngOnInit(): void {
    this.service.getBook(this.route.snapshot.params.id).subscribe(data => {
      this.book = data
    });
  }

  deleteBook(id: number){
    this.store.dispatch(new bookActions.deleteBookAction(id));
    // this.service.deleteBook(id).subscribe(data => {
    //   this.router.navigate(['/books']);
    // })
  }
}
