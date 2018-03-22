import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: []
  };

  loggedUser = {};
  newspapers = {
    bbc: false
  };
  edit = false;

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
    this.loggedUser = user;
  }

  editChange() {
    if (this.edit) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    console.log(this.edit);
  }

  saveChange() {
    if (this.edit) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    this.session.updateUser(this.route.snapshot.params['userid'], this.user).subscribe();
  }

  newValue(value) {
    this.user.picPath = `images/avatars/user-${value}.svg`;
  }

}
