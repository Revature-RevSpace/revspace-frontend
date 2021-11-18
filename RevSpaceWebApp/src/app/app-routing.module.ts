import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  {path: "register", component: RegisterFormComponent},
  { path: 'postfeed', component: PostFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
