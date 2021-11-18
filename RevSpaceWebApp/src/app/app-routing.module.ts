import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import {ViewProfileComponentComponent} from './components/view-profile-component/view-profile-component.component';


const routes: Routes = [
  { path: 'postfeed', component: PostFeedComponent },
  {path: 'view-profile-component', component: ViewProfileComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
