import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'vdot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  isAuthentication: boolean = false;
  constructor(private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onLogin() {

  }
}




