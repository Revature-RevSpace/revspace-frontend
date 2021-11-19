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

  // trying to get number date to work
  // joinDateInput: Date = new Date('Jan 1, 2010');
  joinDateInput: number = 0;

  locationInput: String = "";
  aboutMeInput:String = "";
  birthdayInput: Date = new Date('Jan 1, 2000');

  // turns Date data type into epoch unix time
  epoch (date: any) {
    return Date.parse(date)
  }


  //Sets the input variables equal to the logged in user's current profile data
  //Call this when opening/changing to the edit profile screen
  //Currently uses (hardcoded) placeholder data - refactor once actual user data is available
  resetInputFields() {

    this.firstNameInput = "PlaceholderFirstname";
    this.lastNameInput = "PlaceholderLastName";
    this.titleInput = "Placeholder Title";
    this.githubUsernameInput = "Placeholder GitHubuserName";

    // converting epoch into date
    // although I'm not sure we need to do this
    // our date input is probably smart enough to take in the timestamp in its epoch unix value
    // but just in case it's harder than I anticipate

    let joinUnixDate = 946706400000;
    let joinDate = new Date(joinUnixDate + 100000000);
    let timestamp = this.epoch(joinDate);
    this.joinDateInput = timestamp;

    this.locationInput = "Placeholder Location";
    this.aboutMeInput = "Placeholder AboutMe";
    this.birthdayInput = new Date('Jan 1, 2000');

  }


  //Bundles the input values into a User object, then sends the User object to the service
  //The service will create the request itself
  //Finalize implementation based on what the backend wants for the update request
  confirmUpdateProfile() {

    console.log("Join date representation:");
    console.log(this.joinDateInput);

    // converting the Date into a number type
    // will be helpful for storing in our DB
    let timestamp = this.epoch(this.joinDateInput);
    console.log(timestamp);

    // this doesn't quite make sense here but
    // if we want to turn our timestamp into a Date to display
    let newDate = new Date(timestamp + 100000000);
    console.log(newDate);

    // we can also use a Pipe in our HTML to avoid having to make another Date variable simply for displaying purposes
    // in out HTML file, we would have:
    // {{all.departureDateTime | date: 'MMMM d, y'}}

    console.log("Birthday representation:");
    console.log(this.birthdayInput);
    console.log((new Date(this.birthdayInput)).getTime());

    let fakeUser = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      birthday: (new Date(this.birthdayInput)).getTime(),
      revatureJoinDate: (timestamp),
      // revatureJoinDate: (new Date(this.joinDateInput)).getTime(),
      githubUsername: this.githubUsernameInput,
      title: this.titleInput,
      location: this.locationInput,
      aboutMe: this.aboutMeInput,
    };

    console.log(fakeUser);

    /* Endpoint/method for put user
      @PutMapping(value = "/users/{id}", consumes = "application/json")
      public User updateUser(@PathVariable("id") String id, @RequestBody User newUser)
    */

  }



  //Reset the fields and return to the view user profile screen
  cancelUpdateProfile() {

  }


  alertLeavingEditScreen() {
    confirm("LEave the page?");
  }
  



}

