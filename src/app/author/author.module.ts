import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorIndexComponent } from './author-index/author-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorDeleteComponent } from './author-delete/author-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthorAddComponent, AuthorEditComponent, AuthorIndexComponent, AuthorDeleteComponent]
})
export class AuthorModule { }
