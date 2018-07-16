import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent implements OnInit { 
   
    allUsers:Object;
    constructor(private commonService: CommonService, private router: Router){
   
    }
  
    ngOnInit(){
        this.commonService.getUsers()
           .subscribe(users => {
               //this.allUsers = users;
               
               this.allUsers = users;
               console.log("allUsers : "+this.allUsers);
           })
        }
        
    onSelect(user) {
        console.log("selected user id : ",user._id)
        this.router.navigate(['/user',user._id])
    }     
}
