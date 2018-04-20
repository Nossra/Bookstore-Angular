import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../domain/author';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author-service';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-author-index',
  templateUrl: './author-index.component.html',
  styleUrls: ['./author-index.component.css']
})
export class AuthorIndexComponent implements OnInit {

  authors : Author[] = new Array<Author>();

  constructor(private router: Router, private authorService: AuthorService) { }

  editAuthor(author: Author) {
    this.router.navigate(['/authors', author.id])
  }

  createAuthor() {
    this.router.navigate(['/createauthor']);
  }

  deleteAuthor(author: Author) {
    this.router.navigate(['/deleteauthor', author.id]);
  }
    
  ngOnInit() {
    this.authorService.getAll().subscribe(x => {
      this.authors = x;
    });
  }
}
