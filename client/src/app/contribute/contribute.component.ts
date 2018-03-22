import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { IdeasService } from '../services/ideas.service';
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  user = {
    username: '',
    description: '',
    picPath: '',
    ideas: [],
    following: [],
    comments: []
  };

  nuComment = {
    authorId: '',
    content: '',
    ideaId: this.route.snapshot.params['id'],
    type: '',
    link: ''
  };

  contentComment = '';
  contentRec = '';
  contentSimilar = '';
  linkRec = '';
  linkSimilar = '';

  idea = {
    title: '',
    description: '',
    authorId: {
      username: '',
      picPath: '',
      _id: ''
    },
    category: '',
    comments: [],
    ratings: [],
    followers: [],
    similar: [],
    picPath: 'images/svg/other'
  };

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
      this.ideas.getIdea(this.route.snapshot.params['id'])
      .subscribe(
        (list) => {this.idea = list;
          console.log(list);
        });
  }

  successCb(user) {
    this.user = user;
    this.nuComment.authorId = user._id;
  }

  update() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
      this.ideas.getIdea(this.route.snapshot.params['id'])
      .subscribe(
        (list) => {this.idea = list;
          console.log(list);
        });
  }

  createComment() {
    this.ideas.notify(this.idea.authorId._id, {content: `${this.idea.title} got a new Contribution`})
    .subscribe(not => {
    this.nuComment.type = 'comment';
    this.nuComment.content = this.contentComment;
    this.ideas.newComment(this.nuComment)
    .subscribe(
      (nuComment) => {
        this.nuComment = {
          authorId: '',
          content: '',
          link: '',
          ideaId: this.route.snapshot.params['id'],
          type: ''
        };
      }
    );
  });
  }

  createRec() {
    this.ideas.notify(this.idea.authorId._id, {content: `${this.idea.title} got a new Recommendation`})
    .subscribe(not => {
    this.nuComment.type = 'rec';
    this.nuComment.content = this.contentRec;
    this.nuComment.link = this.linkRec;
    this.ideas.newComment(this.nuComment)
    .subscribe(
      (nuComment) => {
        this.nuComment = {
          authorId: '',
          content: '',
          link: '',
          ideaId: this.route.snapshot.params['id'],
          type: ''
        };
      }
    );
    });
  }

  createSim() {
    this.ideas.notify(this.idea.authorId._id, {content: `${this.idea.title} got a new Similar`})
    .subscribe(not => {
      this.nuComment.type = 'sim';
      this.nuComment.content = this.contentSimilar;
      this.nuComment.link = this.linkSimilar;
      this.ideas.newComment(this.nuComment)
      .subscribe(
        (nuComment) => {
          this.nuComment = {
            authorId: '',
            content: '',
            link: '',
            ideaId: this.route.snapshot.params['id'],
            type: ''
          };
        }
      );
    });
  }
}
