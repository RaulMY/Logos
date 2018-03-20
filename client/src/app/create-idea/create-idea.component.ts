import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { IdeasService } from '../services/ideas.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css']
})
export class CreateIdeaComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: []
  };

  nuIdea = {
    authorId: '',
    description: '',
    title: '',
    category: ''
  };

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  successCb(user) {
    this.user = user;
    this.nuIdea.authorId = user._id;
  }

  update() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  create() {
    this.ideas.newIdea(this.nuIdea)
    .subscribe(
      (idea) => {
        this.nuIdea = {
          authorId: '',
          description: '',
          title: '',
          category: ''
        };
      }
    );
  }

  newValue(value) {
    this.nuIdea.category = value;
  }


}
