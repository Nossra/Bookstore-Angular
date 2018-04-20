import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../domain/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router, 
    private userService: UserService,
    private activatedRouter: ActivatedRoute, 
    private formBuilder: FormBuilder) { 
      this.loginForm = formBuilder.group({
        'username': null,
        'password': null
      });
    }

  login(value: any) {
    this.userService.login(value);
  }

  ngOnInit() {
  }

}
