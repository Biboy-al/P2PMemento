import { Injectable } from '@angular/core';
import { auth } from '../../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor() { }

  login(email: string, password: string){
    signInWithEmailAndPassword(auth, email, password);
  }
}
