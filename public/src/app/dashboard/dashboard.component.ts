import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'dashboard',
  templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent implements OnInit { 
   
    allUsers:Object;
    constructor(private commonService: CommonService){
   
    }
  
    ngOnInit(){
        this.commonService.getUsers()
           .subscribe(users => {
               //this.allUsers = users;
               
               this.allUsers = users;
               console.log("allUsers : "+this.allUsers);
           })
        }  
}
