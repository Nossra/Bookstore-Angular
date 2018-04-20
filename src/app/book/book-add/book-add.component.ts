import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Book } from '../../domain/book';
import { Author } from '../../domain/author';
import { AuthorService } from '../../services/author-service';
import { BookViewModel } from '../../domain/BookViewModel';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  public createBookForm: FormGroup;
  book: Book[];
  authors: Author[];
  newBook: Book = new Book();

  constructor(
    private router: Router,
    private authorService: AuthorService,
    private bookService: BookService,
    private activatedRouter: ActivatedRoute,
    formBuilder: FormBuilder) { 
      this.createBookForm = formBuilder.group({
        title: [null, [Validators.required], null],
        nrOfPages: [null, [Validators.required], null],
        author: [null, [Validators.required], null]
      });
    }

  goBack() {
    this.router.navigateByUrl('/books');
  }

  onSave(value: any) {
    let bvm : BookViewModel = new BookViewModel();
    bvm.authorId=value.author;
    bvm.title=value.title;
    bvm.nrOfPages=value.nrOfPages;
    
    this.bookService.add(bvm).subscribe(x => {
      this.router.navigateByUrl('/books');
    });
  }

  ngOnInit() {
      this.authorService.getAll().subscribe(x => {
      this.authors = x; 
    });
  }
}
