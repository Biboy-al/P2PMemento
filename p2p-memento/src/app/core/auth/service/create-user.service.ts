import { Injectable } from '@angular/core';
import { error } from 'console';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase';

@Injectable({providedIn: "root"})
export class CreateUserService {
  constructor() { 
    
  }

  registerUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth,email, password ).then(
      (userCred) =>{
        console.log(userCred);
      }
    ).catch((error) =>{
      console.log(error);
    })
  }
}
