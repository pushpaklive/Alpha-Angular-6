import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CommonService } from '../common.service';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
})
export class LoginComponent implements OnInit { 
  userModel = new User("",""); 
  users = {};
  submitted = false;
  errorMsg = '';
  constructor(private commonService: CommonService){

  }
   
  ngOnInit(){
      
  }

  authenticateUser(){
      console.log(this.userModel);
      this.submitted = true;
      //this.commonService.editUser(this.userModel);
      this.commonService.authenticateTheUser(this.userModel)
            .subscribe(
              data => console.log("Success",data),
              err => this.errorMsg = err.statusText
            )
  }
}
