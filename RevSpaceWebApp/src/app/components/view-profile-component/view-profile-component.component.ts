import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ViewProfileComponentComponent implements OnInit, OnChanges {

  // to get to this component the path would be viewprofile/:userid

  constructor(private router: Router, private route: ActivatedRoute, private userHTTP: UserService, private loginUser: LoginService) { }
  ngOnChanges(changes: SimpleChanges): void {
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
        console.log(this.followExists);
        if(this.user.followers.includes(this.loginUser.getLoginInfo().user)){
        this.followExists = true;
      }else{
          this.followExists = false;
        }
      }
    )
  }
  // user:User= new User(1,'email','Ryan','Schlientz',120395,2017,'https://github.com/Revature-RevSpace/revspace-application','Senior Trainer','West Virginia',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  user: User;
  followExists = true;
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
        for(let followerList of this.user.followers){
          if(followerList == this.loginUser.getLoginInfo().user){
            this.followExists = true;
          }else{
            this.followExists = false;
              console.log(this.followExists);
            }
        }
      })
    }
  
  
    
    // here will load the user, so load user and assigned user
    // here will also fill the user with data to be displayed

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
          this.followExists != this.followExists;
          //As long as the response isn't null, the operation succeeded
          //Set the user info in the front end to the new data (to avoid an extra backend call)
          //Go the user profile page
          this.sleep(200);
          this.router.navigate(["viewprofile/" + this.user.userId]);
      }
    });

  }


  //need to add this to INIT
  // userExists(user, userid){
  //   if(this.user.userId = userid){
  //     this.userExists = true;
  //   }
  // }

  }
