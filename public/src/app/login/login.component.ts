import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../user';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AfService } from '../providers/af.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`
})
export class LoginComponent implements OnInit {
  userModel = new User("", "");
  users = {};
  submitted = false;
  errorMsg = '';
  firebaseErrorText: any;
  newUser : any;


  //for firebase 15 July
  usersFromFireBase: Observable<any[]>;

  constructor(private commonService: CommonService, public router: Router) {

  }
  //private db: AngularFireDatabase


  ngOnInit() {
    /*this.usersFromFireBase = this.getMessagesFromFirebaseDB('/users');//working 
    const userArr = [];//not working
    userArr.push(this.usersFromFireBase);//not working
    console.log("mesages from firebase db : "+userArr.toString());
    */
  }

  loginUser() {
    console.log(this.userModel);   

    //this.commonService.editUser(this.userModel);
    this.commonService.loginUser<User>(this.userModel)
      .subscribe(
        (user) => {
          this.newUser = user;
          console.log("loginUser() : user : ", user, " : newUser : ",this.newUser);
          console.log("newUser taken in local for front end : "+this.newUser.email);
          if(this.newUser.email == this.userModel.email && this.newUser.password == this.userModel.password)
            this.router.navigateByUrl('/dashboard');
          else{
            this.router.navigateByUrl('/login');
          }          
        },
        (err) => {
          this.errorMsg = err.statusText;
        });
  }

  /*getMessagesFromFirebaseDB(msgPath){
    return this.db.list(msgPath).valueChanges();    
  }*/
}
