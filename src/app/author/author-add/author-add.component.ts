import { Component, OnInit } from '@angular/core';
import { Author } from '../../domain/author';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author-service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  authors : Author = new Author(); 
  public createForm: FormGroup;
  constructor(
    private router: Router,
    private authorService: AuthorService,
    formBuilder: FormBuilder
  ) { 
    this.createForm = formBuilder.group({
      fullName: [null, [Validators.required], null]
    })
  }

  goBack() {
    this.router.navigateByUrl('/authors');
  }

  onSave(author: Author) {
    this.authorService.add(author).subscribe(x => {
      this.router.navigateByUrl('/authors');
    });
  }

  ngOnInit() {
  }

}
