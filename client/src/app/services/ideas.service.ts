import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IdeasService {
option = { withCredentials: true};
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  newIdea(idea) {
    return this.http.post(`http://localhost:1337/ideas/new`, idea, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getIdeas() {
    return this.http.get(`http://localhost:1337/ideas`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getIdea(id) {
    return this.http.get(`http://localhost:1337/ideas/${id}`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  follow(userId, ideaId) {
    const message = {
      id: ideaId,
      userid: userId
    };
    return this.http.post(`http://localhost:1337/ideas/follow`, message, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  unfollow(userId, ideaId) {
    const message = {
      id: ideaId,
      userid: userId
    };
    return this.http.post(`http://localhost:1337/ideas/unfollow`, message, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  newComment(comment) {
    return this.http.post(`http://localhost:1337/ideas/contribute`, comment, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  sendMessage(message) {
    return this.http.post(`http://localhost:1337/ideas/contact`, message, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  rateUp(commentId, authorId) {
    return this.http.get(`http://localhost:1337/ideas/rateup/${commentId}/${authorId}`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  rateDown(commentId, authorId) {
    return this.http.get(`http://localhost:1337/ideas/ratedown/${commentId}/${authorId}`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateIdea(id, info) {
    return this.http.post(`http://localhost:1337/ideas/${id}`, info, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  notify(id, notification) {
    return this.http.post(`http://localhost:1337/ideas/${id}/notify`, notification, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
