import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../domain/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Author } from '../../domain/author';
import { AuthorService } from '../../services/author-service';
import { BookViewModel } from '../../domain/BookViewModel';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  books : BookViewModel[] = new Array<BookViewModel>();
  authors : Author[] = new Array<Author>();

  constructor(private router: Router,
    private authorService: AuthorService, 
    private bookService: BookService) { }

  editBook(book: Book) {
    this.router.navigate(['/books', book.id]);
  }

  createBook() {
    this.router.navigate(['/createbook']);
  }

  deleteBook(book: Book) {
    this.router.navigate(['/deletebook', book.id]);
  }

  ngOnInit() {
    this.bookService.getAllBookViews().subscribe(x => {
      this.books = x;
    });

    this.authorService.getAll().subscribe(x => {
      this.authors = x;
    });
  }
}
