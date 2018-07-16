import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User("", "");
  users = {};
  submitted = false;
  errorMsg = '';


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

  authenticateUser() {
    console.log(this.userModel);
    this.submitted = true;
    this.router.navigateByUrl('/login');
    //this.commonService.editUser(this.userModel);
    this.commonService.authenticateTheUser(this.userModel)
      .subscribe(
        (data) => {
          console.log("Success", data);
        }
        ,
        err => this.errorMsg = err.statusText
      )
  }
}
