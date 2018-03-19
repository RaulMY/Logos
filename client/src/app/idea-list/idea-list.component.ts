import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { IdeasService } from '../services/ideas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: [],
    _id: ''
  };

  ideaList = [];

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService ) { }

  ngOnInit() {
    this.session.isLoggedInHome()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdeas()
    .subscribe(
      (list) => {this.ideaList = list;
    console.log(this.ideaList);
  });
  }

  successCb(user) {
    this.user = user;
    console.log(this.user);
  }

  update() {
    console.log("hello");
    this.session.isLoggedInHome()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdeas()
    .subscribe(
      (list) => this.ideaList = list
      );
  }

  follow(id) {
    console.log(id);
    this.ideas.follow(this.user._id, id)
    .subscribe(
      (res) => this.update()
    );
  }

  unfollow(id) {
    console.log(id);
    this.ideas.unfollow(this.user._id, id)
    .subscribe(
      (res) => this.update()
    );
  }
}
