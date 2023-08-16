import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'update-new-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private service: BookService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  book!: Book;
  updateBookForm! : FormGroup;

  ngOnInit(): void {
   this.service.getBook(this.route.snapshot.params.id).subscribe(data => {
    this.book = data;

    this.updateBookForm = this.fb.group({
      id: [data.id],
      title: [data.title, Validators.required],
      author: [data.author, Validators.required],
      description: [data.description, Validators.compose([Validators.required, Validators.minLength(5)])],
      rate: [data.rate],
      dateStart: [this.formatDate(data.dateStart)],
      dateRead: [this.formatDate(data.dateRead)]
    });
   });
  }

  formatDate(date?: Date){
    return date ? new Date(date).toISOString().substring(0, 10) : date;
  }

  onSubmit(): void {
    this.service.updateBook(this.updateBookForm.value).subscribe(data => {
      this.router.navigate(['/books'])
    });
  }
}
