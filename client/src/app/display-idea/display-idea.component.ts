import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { IdeasService } from '../services/ideas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-idea',
  templateUrl: './display-idea.component.html',
  styleUrls: ['./display-idea.component.css']
})

export class DisplayIdeaComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: []
  };

  idea = {
    title: '',
    description: '',
    authorId: {
      username: '',
      picPath: ''
    },
    category: '',
    comments: [],
    ratings: [],
    followers: [],
    similar: [],
    picPath: ''
  };

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdea(this.route.snapshot.params['id'])
    .subscribe(
      (list) => this.idea = list
      );
  }

  successCb(user) {
    this.user = user;
  }

  update() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdea(this.route.snapshot.params['id'])
    .subscribe(
      (list) => this.idea = list
      );
  }

}
