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
    comments: [],
    _id: ''
  };

  id = this.route.snapshot.params['id'];

  idea = {
    title: '',
    description: '',
    authorId: {
      username: '',
      picPath: '',
      id: ''
    },
    category: '',
    comments: [],
    ratings: [],
    followers: [],
    similar: [],
    picPath: 'images/svg/other'
  };

  contributions = [];
  similars = [];
  recs = [];

  contact = false;

  message = {
    title: '',
    content: '',
    recId: '',
    sendId: ''
  };

  allCon = false;

  allSim = false;

  allRec = false;

  edit = false;

  constructor(private session: SessionService, private router: Router, private ideas: IdeasService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.ideas.getIdea(this.route.snapshot.params['id'])
    .subscribe(
      (list) => {this.idea = list;
        console.log(this.idea);
        this.message.recId = list.authorId._id;
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

  update() {
    this.ideas.getIdea(this.route.snapshot.params['id'])
    .subscribe(
      (list) => {this.idea = list;
        console.log(this.idea);
        this.message.recId = list.authorId._id;
        this.contributions = [];
        this.similars = [];
        this.recs = [];
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
    this.message.sendId = user._id;
    console.log(this.user);
  }


  toggleContact() {
    if (this.contact) {
      this.contact = false;
    } else {
      this.contact = true;
    }
    console.log(this.contact);
  }

  sendMessage() {
    if (this.contact) {
      this.contact = false;
    } else {
      this.contact = true;
    }
    this.ideas.sendMessage(this.message).subscribe();
    this.message.title = '';
    this.message.content = '';
    console.log(this.message);
  }

  toggleCon() {
    if (this.allCon) {
      this.allCon = false;
    } else {
      this.allCon = true;
    }
  }

  toggleSim() {
    if (this.allSim) {
      this.allSim = false;
    } else {
      this.allSim = true;
    }
  }

  toggleRec() {
    if (this.allRec) {
      this.allRec = false;
    } else {
      this.allRec = true;
    }
  }

  rateUp(commentId) {
    this.ideas.rateUp(commentId, this.user._id).subscribe(
      (res) => this.update()
    );
  }

  rateDown(commentId) {
    this.ideas.rateDown(commentId, this.user._id).subscribe(
      (res) => this.update()
    );
  }

  follow() {
    this.ideas.follow(this.user._id, this.id)
    .subscribe(
      (res) => this.update()
    );
  }

  unfollow() {
    this.ideas.unfollow(this.user._id, this.id)
    .subscribe(
      (res) => this.update()
    );
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
    this.ideas.updateIdea(this.route.snapshot.params['id'], this.idea).subscribe();
  }
}
