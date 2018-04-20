import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../domain/book';
import { Injectable } from '@angular/core';
import { BookViewModel } from '../domain/BookViewModel';

@Injectable()
export class BookService {
    constructor(private http: HttpClient) { }
    books : Array<Book> = new Array<Book>();
    baseUrl: string = 'http://localhost:8080/Bookstore/api/books/';

    private header: any = {
        'Content-Type':'application/json', 'Authorization':  'Bearer ' + localStorage.getItem("token")
   }

   set token(val: string) {
       this.header.Authorization = 'Bearer ' + val;
   }

    public getAllBookViews() : Observable<Array<BookViewModel>> {
        return this.http.get<Array<BookViewModel>>(this.baseUrl, {headers : this.header});
     }

    public getBookById(id: number) : Observable<BookViewModel> {
        let url = this.baseUrl + id;
        return this.http.get<BookViewModel>(url, {headers : this.header});
    }

    public getBookViewModelById(id: number) : Observable<BookViewModel> {
        let url = this.baseUrl + id;
        return this.http.get<BookViewModel>(url, {headers: this.header});
    }

    public delete(book: BookViewModel) : Observable<BookViewModel> {
        let url = this.baseUrl + book.id;
        return this.http.delete<BookViewModel>(url, {headers : this.header});
    }

    public update(book: BookViewModel) : Observable<BookViewModel> {
        let url = this.baseUrl + book.id;
        return this.http.put<BookViewModel>(url, book, {headers : this.header});
    }

    public add(book: BookViewModel) : Observable<BookViewModel> {
        let url = this.baseUrl;
        return this.http.post<BookViewModel>(url, book, {headers : this.header});
    }

}

