import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: [],
    _id: '',
    messages: []
  };

  newMessage = {
    title: '',
    content: ''
  };


  constructor(private session: SessionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );

    this.session.getUser(this.route.snapshot.params['userid'])
    .subscribe(
      (user) => this.user = user
    );
  }

  successCb(user) {
    this.user = user;
  }

  toggleReply(i) {
    console.log(i);
  }


}
