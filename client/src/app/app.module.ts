import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { SessionService } from './services/session.service';
import { IdeasService } from './services/ideas.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { DisplayIdeaComponent } from './display-idea/display-idea.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: IdeaListComponent},
  { path: 'new', component: CreateIdeaComponent},
  { path: 'inbox', component: InboxComponent},
  { path: ':id', component: DisplayIdeaComponent},
  { path: ':id/contribute', component: ContributeComponent},
  { path: 'user/:userid', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IdeaListComponent,
    CreateIdeaComponent,
    DisplayIdeaComponent,
    ContributeComponent,
    DashboardComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, IdeasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
