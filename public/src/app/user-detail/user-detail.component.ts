import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CommonService } from '../common.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId;
  userDetail:any;
  userArr = [];
  extractedId;
  user = new User("","","");

  constructor(private currentRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('_id');
    this.user._id = id;
    //Will start from here//10:47 PM
    console.log("original id: "+id);
    this.userId = parseInt(this.currentRoute.snapshot.paramMap.get('_id'));
    console.log("parsed id : ", this.userId );
  }

}
