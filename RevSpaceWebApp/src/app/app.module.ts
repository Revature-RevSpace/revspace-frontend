import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewProfileComponentComponent } from './components/view-profile-component/view-profile-component.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PopulateFeedComponent } from './components/populate-feed/populate-feed.component';
import { ViewProfileComponentComponent } from './components/view-profile-component/view-profile-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponentComponent,
    PostFeedComponent,
    CreatePostComponent,
    PopulateFeedComponent,
    ViewProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
