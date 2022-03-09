import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit, OnChanges {

  // to get to this component the path would be viewprofile/:userid

  constructor(private router: Router, private route: ActivatedRoute, private userHTTP: UserService, private loginUser: LoginService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    const routeParams = this.route.snapshot.paramMap;
    const userid = Number(routeParams.get('userId'));
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    this.userHTTP.getUserById(userid,myHeaders).subscribe(
      (response)=> {
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
  loggedUser: User = this.loginUser.getLoginInfo().user;
  followExists = true;
  userSame: boolean;


  ngOnInit(): void {
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    const routeParams = this.route.snapshot.paramMap;
    const userid = Number(routeParams.get('userId'));
    console.log(userid);
    this.userHTTP.getUserById(userid,myHeaders).subscribe(
      (response)=> {
        this.user = response;
        console.log(this.loggedUser);
        console.log(this.user);
        for(let followerList of this.user.followers){
          if(followerList == this.loginUser.getLoginInfo().user){
            this.followExists = true;
          }else{
            this.followExists = false;
              console.log(this.followExists);
            };
          } 
            
            if(this.loggedUser.userId == userid){
              this.userSame = false;
            }else{
              this.userSame = true;
            }
          
        }
    )
    }

    //creating method to change boolean value initialized above
    //need to check if loggedUser is same as user on the view-profile page
    //if the user is the same as the loggedUser, don't display follow button

    //setting up async and sleep to use for promise later on
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

  //this follow method is for follow AND unfollow
  //the method toggles the button on the frontend to display "follow" or "unfollow" given whether 
  //or not the followers list for the profile page contains the loggedUser
  follow() {
    this.followRequest();
    // this.userHTTP.followUser(this.user.userId, this.loginUser.getLoginInfo().user, myHeaders).subscribe(
    //   (response) => {
    //     if(null != response) {
    //       this.followExists != this.followExists;
    //       //As long as the response isn't null, the operation succeeded
    //       //Set the user info in the front end to the new data (to avoid an extra backend call)
    //       //Go the user profile page
    //       //putting long sleep here in order to give time for backend to populate the postfeed properly
    //       // this.sleep(1200);
    //       this.router.navigate(["postfeed"]);
    //   }
    // });

  }

  async followRequest(){
    const authToken:string = this.loginUser.getLoginInfo().authToken;
    const myHeaders:HttpHeaders = new HttpHeaders({
    'Authorization': authToken
      });
    let response = await this.userHTTP.followUser(this.user.userId, this.loginUser.getLoginInfo().user, myHeaders).toPromise();
    this.followExists != this.followExists;
    this.router.navigate(["postfeed"]);
  }
}
