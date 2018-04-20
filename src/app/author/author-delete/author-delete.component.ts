import { Component, OnInit } from '@angular/core';
import { Author } from '../../domain/author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author-service';

@Component({
  selector: 'app-author-delete',
  templateUrl: './author-delete.component.html',
  styleUrls: ['./author-delete.component.css']
})
export class AuthorDeleteComponent implements OnInit {

  author: Author
  authorId: number;

  constructor(
    private activatedRouter: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router) { }

  goBack() {
    this.router.navigateByUrl('/authors');
  }

  delete(author) {
    this.authorService.delete(author).subscribe(x => {
      this.router.navigateByUrl('/authors');
    });
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.authorId = x["id"];
    });
    this.authorService.getAuthorById(this.authorId).subscribe(x => {
      this.author = x;
    }); 
  }

}
