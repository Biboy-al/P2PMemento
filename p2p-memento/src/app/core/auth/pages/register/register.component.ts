import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Inject } from '@angular/core';
import { CreateUserService } from '../../service/create-user.service';
import { FormBuilder, Validator, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule,MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private formBuilder = inject(FormBuilder);
  private createUser = inject(CreateUserService);

  // detailsForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  credForm = this.formBuilder.group({

    email: ['', Validators.required],
    password: ['', Validators.required]

  });



  regUser(){
    const email = this.credForm.get("email")?.value!;
    const password = this.credForm.get("password")?.value!;
    this.createUser.registerUser(email, password);
    
  }

}
