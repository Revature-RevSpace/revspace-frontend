import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-profile-component',
  templateUrl: './view-profile-component.component.html',
  styleUrls: ['./view-profile-component.component.css']
})
export class ViewProfileComponentComponent implements OnInit {

  // to get to this component the path would be viewprofile/:userid

  constructor(private router: Router, private route: ActivatedRoute, private userHTTP: UserService, private loginUser: LoginService) { }

  // user:User= new User(1,'email','Ryan','Schlientz',120395,2017,'https://github.com/Revature-RevSpace/revspace-application','Senior Trainer','West Virginia',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  user: User;
  followExists: boolean = false;
  userSame: boolean = false;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userid = Number(routeParams.get('userId'));
    console.log(userid);
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    this.userHTTP.getUserById(userid,myHeaders).subscribe(
      (response)=> {
        console.log(response);
        this.user = response;
      }
    )
    // here will load the user, so load user and assigned user
    // here will also fill the user with data to be displayed
  }
  // load():void{
  //   this.user.firstName='test';

  // }
  // getUser(): User{
    
  // }

  async init() {
    console.log(1);
    await this.sleep(1000);
    console.log(2);
  }
  
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  follow() {
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
    'Authorization': authToken
      });
    this.userHTTP.followUser(this.user.userId, this.loginUser.getLoginInfo().user, myHeaders).subscribe(
      (response) => {
        if(null != response) {
          this.followExists = true;
          //As long as the response isn't null, the operation succeeded
          //Set the user info in the front end to the new data (to avoid an extra backend call)
          //Go the user profile page
          this.sleep(200);
          this.router.navigate(["viewprofile/" + this.user.userId]);
      }
    });

  }

  unfollow() {
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
    'Authorization': authToken
      });
    this.userHTTP.followUser(this.user.userId, this.loginUser.getLoginInfo().user, myHeaders).subscribe(
      (response) => {
        if(null != response) {
          this.followExists = false;
          //As long as the response isn't null, the operation succeeded
          //Set the user info in the front end to the new data (to avoid an extra backend call)
          //Go the user profile page
          this.sleep(200);
          this.router.navigate(["viewprofile/" + this.user.userId]);
      }
    });

  }

  // userExists(user, userid){
  //   if(this.user.userId = userid){
  //     this.userExists = true;
  //   }
  // }


  public isFollowing(userid){
    this.user.userId = userid;
  }

  public isntFollowing(userid){
    this.user.userId != userid;
  }



}
