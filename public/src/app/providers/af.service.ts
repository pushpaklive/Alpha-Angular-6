/*import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  user:Observable<firebase.User>;

  constructor(public afAuth : AngularFireAuth) {
      this.user = afAuth.authState;
      console.log("user : idToken : "+afAuth.idToken);
   }

  loginWithGoogle(){
    const githubProvider = new firebase.auth.GithubAuthProvider();
    this.afAuth.auth.signInWithPopup(githubProvider);
  } 

  logout(){
    this.afAuth.auth.signOut();
  }
}
*/