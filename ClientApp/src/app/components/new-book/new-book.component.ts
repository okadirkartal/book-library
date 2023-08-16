import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private service: BookService, private fb: FormBuilder, private router: Router) { }

  addBookForm! : FormGroup;
  showError: boolean = false;

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      id: [Math.floor(Math.random() * 1000)],
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      rate: [null],
      dateStart: [null],
      dateRead: [null]
    });
  }

  onSubmit(): void {
    this.service.addBook(this.addBookForm.value).subscribe(data => {
      this.router.navigate(['/books'])
    }, error =>{
      this.showError = true
    });
  }
}
