import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginUserService } from '../../service/login-user.service';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule,MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private login = inject(LoginUserService);

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  loginUser(){
    const email = this.loginForm.get("email")?.value!;
    const password = this.loginForm.get("password")?.value!;
    this.login.login(email,password);
  };

}
