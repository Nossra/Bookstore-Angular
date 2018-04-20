import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../../services/author-service';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../domain/author';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author: Author = new Author();
  authorId: number;
  public editForm: FormGroup;
  oldName: string;

  constructor(
    private router: Router, 
    private authorService:  AuthorService, 
    private activatedRouter: ActivatedRoute, 
    private formBuilder: FormBuilder) { 
      this.editForm = formBuilder.group({
        'id': null,
        'fullName': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
      });
    }
  
  onSave(value) {
    this.author.fullName = value.fullName;
    this.authorService.update(this.author).subscribe(x => {
        this.router.navigateByUrl('/authors');
    })
  }

  goBack() {
    this.router.navigateByUrl('/authors');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.authorId = x["id"];
    });
    this.authorService.getAuthorById(this.authorId).subscribe(x => {
      this.author = x;
      this.oldName = x.fullName;
    }); 
  }



}
