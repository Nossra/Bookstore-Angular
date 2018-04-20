import { User } from "../domain/user";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from "@angular/router";
import { TokenObject } from "../domain/TokenObject";
import { AuthorService } from "./author-service";

@Injectable()
export class UserService {
    userUrl: string = 'http://localhost:8080/Bookstore/api/users/login';
    private user:User;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService,
        private router: Router,
        private authService: AuthorService    
    ) { }

    public get authenticated(): boolean {
        const token = this.jwtHelper.tokenGetter();
        if (token) {    
            return !this.jwtHelper.isTokenExpired(token);
        } else {
            return false;
        }
    }

    public login(value: any) {
        let url = this.userUrl;
        return this.http.post(url, value, { headers: { 'Content-Type' : 'application/json' }}).subscribe((x: TokenObject) => {
            localStorage.setItem('token', x.token);
            this.authService.token = x.token;
            this.user = new User();
            this.user.username = value.username;
            this.router.navigateByUrl('/authors');
        });
    }
}
