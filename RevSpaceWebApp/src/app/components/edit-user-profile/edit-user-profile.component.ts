import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  constructor() { 

    let dateObject = new Date();
    let currentYear = dateObject.getFullYear();
    let currentMonth = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    let currentDay = dateObject.getDate().toString().padStart(2, '0');

    this.currentDateString = currentYear + "-" + currentMonth + "-" + currentDay;
    this.minimumBirthdayString = (currentYear-125) + "-" + currentMonth + "-" + currentDay;

    this.resetInputFields();

    
  }

  ngOnInit(): void {}

  //Variable declarations 
  currentDateString:String;
  minimumBirthdayString: String;

  firstNameInput: String = "";
  lastNameInput: String = "";
  titleInput: String = "";
  githubUsernameInput: String = "";
  joinDateInput: Date = new Date('Jan 1, 2010');
  locationInput: String = "";
  aboutMeInput:String = "";
  birthdayInput: Date  = new Date('Jan 1, 2000');


  //Sets the input variables equal to the logged in user's current profile data
  //Call this when opening/changing to the edit profile screen
  //Currently uses (hardcoded) placeholder data - refactor once actual user data is available
  resetInputFields() {

    this.firstNameInput = "PlaceholderFirstname";
    this.lastNameInput = "PlaceholderLastName";
    this.titleInput = "Placeholder Title";
    this.githubUsernameInput = "Placeholder GitHubuserName";
    this.joinDateInput = new Date('Jan 1, 2015');
    this.locationInput = "Placeholder Location";
    this.aboutMeInput = "Placeholder AboutMe";
    this.birthdayInput = new Date('Jan 1, 2000');

  }


  //Bundles the input values into a User object, then sends the User object to the service
  //The service will create the request itself
  //Finalize implementation based on what the backend wants for the update request
  confirmUpdate() {

    console.log("Join date representation:");
    console.log(this.joinDateInput);
    console.log((new Date(this.joinDateInput)).getTime());

    console.log("Birthday representation:");
    console.log(this.birthdayInput)
    console.log((new Date(this.birthdayInput)).getTime());

    let fakeUser = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      birthday: (new Date(this.birthdayInput)).getTime(),
      revatureJoinDate: (new Date(this.joinDateInput)).getTime(),
      githubUsername: this.githubUsernameInput,
      title: this.titleInput,
      location: this.locationInput,
      aboutMe: this.aboutMeInput,
    };

    console.log(fakeUser);
    

  }



  //Reset the fields and return to the view user profile screen
  cancelChanges() {

  }

  



}

