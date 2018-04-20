import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookIndexComponent } from './book/book-index/book-index.component';
import { AuthorIndexComponent } from './author/author-index/author-index.component';
import { HomeComponent } from './home/home.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorAddComponent } from './author/author-add/author-add.component';
import { AuthorDeleteComponent } from './author/author-delete/author-delete.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { AuthGuardService } from './services/authguard-service';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'books', component: BookIndexComponent },
  { path: 'authors', component: AuthorIndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authors/:id', component: AuthorEditComponent, canActivate: [AuthGuardService] },
  { path: 'createauthor', component: AuthorAddComponent, canActivate: [AuthGuardService] },
  { path: 'deleteauthor/:id', component: AuthorDeleteComponent, canActivate: [AuthGuardService] },
  { path: 'deletebook/:id', component: BookDeleteComponent, canActivate: [AuthGuardService] },
  { path: 'createbook', component: BookAddComponent, canActivate: [AuthGuardService] },
  { path: 'books/:id', component: BookEditComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
