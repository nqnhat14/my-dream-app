import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  info: String;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    const authData = localStorage.getItem("authData");
    console.log(authData);
    if (authData != "" && authData != null) {
      this.router.navigate(['./home']);
    }
  }

  onSubmit() {
    this.loginService.login({email: this.loginForm.value.email, password: this.loginForm.value.password})
      .subscribe((data)=> {
        localStorage.setItem("authData", JSON.stringify(data));
        this.router.navigate(['./home']);
      });
  }

}
