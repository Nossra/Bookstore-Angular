import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../domain/book';
import { BookViewModel } from '../../domain/BookViewModel';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public editBookForm: FormGroup;
  book: BookViewModel = new BookViewModel();
  bookId: number;
  oldTitle: string;

  constructor(private router: Router,
    private bookService: BookService,
    private acitvatedRouter: ActivatedRoute,
    formBuilder: FormBuilder) {
      this.editBookForm = formBuilder.group({
        'id': null,
        'title': [this.book.title, Validators.compose([Validators.required, Validators.minLength(3)])],
        'nrOfPages' : [this.book.nrOfPages, Validators.compose([Validators.required])]
      });
    }

  goBack() {
    this.router.navigateByUrl('/books');
  }

  onSave(value) {
    this.book.title = value.title;
    this.book.nrOfPages = value.nrOfPages;
    this.bookService.update(this.book).subscribe(x => {
      this.router.navigateByUrl('/books');
    })
  }

  ngOnInit() {
    this.acitvatedRouter.params.subscribe(x => {
      this.bookId = x["id"];
    });
    this.bookService.getBookById(this.bookId).subscribe(x => {
      this.book = x;
      this.oldTitle = x.title;
    }); 
  }

}
