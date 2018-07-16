import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages:Object;

  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.commonService.getMessages()
          .subscribe(messages => {
            this.messages = messages;
            console.log("messages in component : "+this.messages+" from service : "+messages);
          })
  }

}
