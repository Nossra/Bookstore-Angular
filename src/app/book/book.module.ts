import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIndexComponent } from './book-index/book-index.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BookAddComponent, BookEditComponent, BookIndexComponent, BookDeleteComponent]
})
export class BookModule { }
