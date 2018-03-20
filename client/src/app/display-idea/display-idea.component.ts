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
    picPath: 'images/svg/other'
  };

  contributions = [
    {content: 'Hey, we still need a comment!'},
    {content: 'Hey, we still need a comment!'},
    {content: 'Hey, we still need a comment!'}
  ];
  similars = [
    {
      content: 'Nothing here yet!',
      link: '#'
    },
    {
      content: 'Nothing here yet!',
      link: '#'
    },
    {
      content: 'Nothing here yet!',
      link: '#'
    }];
  recs = [
    {
      content: 'Nothing here yet!',
      link: '#'
    },
    {
      content: 'Nothing here yet!',
      link: '#'
    },
    {
      content: 'Nothing here yet!',
      link: '#'
    }];

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdea(this.route.snapshot.params['id'])
    .subscribe(
      (list) => {this.idea = list;
        list.comments.forEach(comment => {
          if (comment.type  === 'comment') {
            this.contributions.unshift(comment);
          }
        });
        list.comments.forEach(comment => {
          if (comment.type  === 'sim') {
            this.similars.unshift(comment);
          }
        });
        list.comments.forEach(comment => {
          if (comment.type  === 'red') {
            this.recs.unshift(comment);
          }
        });
      });
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
