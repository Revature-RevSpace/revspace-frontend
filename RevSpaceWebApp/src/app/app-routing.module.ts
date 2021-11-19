import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ViewProfileComponentComponent} from './components/view-profile-component/view-profile-component.component';


const routes: Routes = [
  { path: 'postfeed', component: PostFeedComponent },
  {path: 'viewprofile', component: ViewProfileComponentComponent},
  { path: 'register', component: RegisterFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
