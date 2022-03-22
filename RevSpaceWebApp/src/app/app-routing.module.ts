import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ViewProfileComponent} from './components/view-profile/view-profile.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component:PostFeedComponent},
  {path: 'postfeed', component: PostFeedComponent},
  {path: 'viewprofile/:userId', component: ViewProfileComponent},
  {path: 'editprofile', component: EditUserProfileComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'search-details', component: SearchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
