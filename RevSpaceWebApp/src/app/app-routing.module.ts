import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ViewProfileComponentComponent} from './components/view-profile-component/view-profile-component.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { ChangePasswordComponentComponent } from './components/change-password-component/change-password-component.component';

const routes: Routes = [
  {path: '', component:PostFeedComponent},
  {path: 'postfeed', component: PostFeedComponent},
  {path: 'viewprofile/:userId', component: ViewProfileComponentComponent},
  {path: 'editprofile', component: EditUserProfileComponent},
  {path: 'changePassword', component: ChangePasswordComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
