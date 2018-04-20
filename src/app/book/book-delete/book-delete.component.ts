import { Component, OnInit } from '@angular/core';
import { Book } from '../../domain/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book-service';
import { BookViewModel } from '../../domain/BookViewModel';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  bookId: number;
  book: BookViewModel;

  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  goBack() {
    this.router.navigateByUrl('/books');
  }

  delete(author) {
    this.bookService.delete(author).subscribe(x => {
      this.router.navigateByUrl('/books');
    });
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.bookId = x["id"];
    });
    this.bookService.getBookById(this.bookId).subscribe(x => {
      this.book = x;
    });
  }

}
