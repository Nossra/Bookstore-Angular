import { HttpClient, HttpParams } from "@angular/common/http";
import { RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Author } from "../domain/author";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class AuthorService {
    authorUrl: string = 'http://localhost:8080/Bookstore/api/authors/';
    constructor(private http: HttpClient) { 
    }
    private header: any = {
         'Content-Type':'application/json', 'Authorization':  'Bearer ' + localStorage.getItem("token")
    }

    set token(val: string) {
        this.header.Authorization = 'Bearer ' + val;
    }

    public getAll() : Observable<Array<Author>> {
        return this.http.get<Array<Author>>(this.authorUrl, { headers: this.header});
    }

    public getAuthorById(id: number) : Observable<Author> {
        let url = this.authorUrl + id;
        return this.http.get<Author>(url, { headers: this.header});
    }

    public update(author: Author) : Observable<Author> {
        let url = this.authorUrl + author.id;
        return this.http.put<Author>(url, author,  { headers: this.header});
    }

    public add(author: Author) : Observable<Author> {
        let url = this.authorUrl;
        return this.http.post<Author>(url, author, { headers: this.header});
    }

    public delete(author: Author) : Observable<Author> {
        let url = this.authorUrl + author.id
        return this.http.delete<Author>(url, { headers: this.header});
    }
}