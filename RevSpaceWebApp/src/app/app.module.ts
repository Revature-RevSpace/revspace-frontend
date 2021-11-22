import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';

import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PopulateFeedComponent } from './components/populate-feed/populate-feed.component';
import { ViewProfileComponentComponent } from './components/view-profile-component/view-profile-component.component';
import { TopComponent } from './components/top/top.component';
import { ImageService } from './services/image.service';



@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponentComponent,
    PostFeedComponent,
    CreatePostComponent,
    PopulateFeedComponent,
    ViewProfileComponentComponent,
    RegisterFormComponent,
    LoginComponent,
    TopComponent
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
