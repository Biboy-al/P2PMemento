import { inject, Injectable } from '@angular/core';
import { auth } from '../../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private router = inject(Router)

  constructor() { }

  login(email: string, password: string){
    signInWithEmailAndPassword(auth, email, password).then(
      (userCred) =>{  
        this.router.navigate(['/dashboard']);
      }
    ).catch();
  }
}
