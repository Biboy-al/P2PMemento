import { inject, Injectable } from '@angular/core';
import { error } from 'console';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase';
import { Router } from '@angular/router';

@Injectable({providedIn: "root"})
export class CreateUserService {
  private router = inject(Router);
  constructor() { 
    
  }

  registerUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth,email, password ).then(
      //if successful redirect
      (userCred) =>{
        console.log(userCred);
        this.router.navigate(['/dashboard']);

      }
    ).catch((error) =>{
      console.log(error);
    })
  }
}
