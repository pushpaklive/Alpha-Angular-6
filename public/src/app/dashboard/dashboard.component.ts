import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'dashboard',
  templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent implements OnInit { 
   
    users = {};
    constructor(private commonService: CommonService){
  
    }
  
    ngOnInit(){
        this.commonService.castUserAsObs.subscribe(users => this.users = users);
    }  
}
