import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    this.resetInputFields();
  }

  //Variable declarations 
  currentDateString:String;
  minimumBirthdayString: String;

  // Used to store the string values
  firstNameInput: String = "";
  lastNameInput: String = "";
  titleInput: String = "";
  githubUsernameInput: String = "";
  locationInput: String = "";
  aboutMeInput:String = "";

  // Used to store the date values
  //Initialized to the current date, but overwritten when the user's data is loaded
  joinDateInput: Date = new Date();
  birthdayInput: Date = new Date();

  //The html input tags for the date values automatically factor in the user's timezone when displaying dates
  //If left alone, the displayed date may be different than the date the user entered (Ex: 12/31/2004 17:00 instead of 1/1/2005 0:00)
  //This calculates the timezone offset (in ms), which we apply to the incoming and outgoing date values to prevent the above mis-representation while preserving the correct unix time in the database
  dateTimezoneOffset = 60*1000*this.joinDateInput.getTimezoneOffset();

  //Used to display spans warning the user of date limits
  joinDateLimitWarning: Boolean = false;
  birthdayLimitWarning: Boolean = false;

  maxDateVar = new Date(); 

  testLimit() {
    console.log(this.maxDateVar);
    console.log(this.joinDateInput);
    console.log(this.joinDateInput > this.maxDateVar);
  }
/*
    //Min Value for join date
    let minJoinDate = new Date(2003, 0, 1); 
    let minJoinDateValue = this.convertToUnixTime(minJoinDate) -this.dateTimezoneOffset;
    //Min Value for birthday
    let minBirthday = new Date(maxDate.getFullYear() - 125, 0, 1); 
    let minBirthdayValue = this.convertToUnixTime(minBirthday) -this.dateTimezoneOffset;
  */



  //Converts Date and String data types from the date input tags into unix time (in ms)
  //We need to handle both date and string value types here:
  //Since we provide a date object to the input tags, if left unchanged by the user we get a date back out
  //But if the user changes the value, the tag gives us a string we need to manually parse
  convertToUnixTime(date: any) {

    if((typeof date) == (typeof String("I'm a string!"))) {
      //If date is a string:
      //Make a new date object to manupulate (with only day/month/year values)
      let equivalentDate = new Date(1970,0,1);

      //Set the date to the user's input and return the equivalent unix time
      let timeValue = equivalentDate.setUTCFullYear(date.substring(0,4), date.substring(5,7)-1, date.substring(8,10));
      return timeValue;

    } else {
      //If date is a Date object, just convert directly to the the equivalent unix time
      return (date.getTime());
    }
  }


  //Sets the input variables equal to the logged in user's current profile data
  //Call this when opening/changing to the edit profile screen
  //Currently uses (hardcoded) placeholder data - refactor once actual user data is available
  resetInputFields() {

    //Replace these values with ones from the session storage
    this.firstNameInput = "PlaceholderFirstname";
    this.lastNameInput = "PlaceholderLastName";
    this.titleInput = "Placeholder Title";
    this.githubUsernameInput = "Placeholder GitHubuserName";
    this.locationInput = "Placeholder Location";
    this.aboutMeInput = "Placeholder AboutMe";

    let joinUnixDate = 1104537600000; //Jan 1, 2005 12:00 AM UTC
    let birthdayUnixDate = 788918400000; //Jan 1, 1995 12:00 AM UTC

    //Convert the numeric date values into Date objects
    //This uses the local time zone offset to prevent the incorrect date from appearing due to the input tags automatically factoring in timezone differences
    //We will have to subtract this value when we convert back during the update process
    this.joinDateInput = new Date(joinUnixDate + this.dateTimezoneOffset);
    this.birthdayInput = new Date(birthdayUnixDate + this.dateTimezoneOffset);
  }


  //Bundles the input values into a User object, then sends the User object to the service
  //The service will create the request itself
  //Finalize implementation based on what the backend wants for the update request
  confirmUpdateProfile() {

    //Convert the Date objects back into numeric values for database storage
    //Don't forget to undo the timezone value shift from before!
    let joinDateNumber = this.convertToUnixTime(this.joinDateInput) -this.dateTimezoneOffset;
    let birthdayNumber = this.convertToUnixTime(this.birthdayInput) -this.dateTimezoneOffset;


    //Verify all input values are within tolerances!
    //Max values for join date and birthday
    let maxDate = new Date(); 
    let maxDateValue = this.convertToUnixTime(maxDate) -this.dateTimezoneOffset; 
    //Min Value for join date
    let minJoinDate = new Date(2003, 0, 1); 
    let minJoinDateValue = this.convertToUnixTime(minJoinDate) -this.dateTimezoneOffset;
    //Min Value for birthday
    let minBirthday = new Date(maxDate.getFullYear() - 125, 0, 1); 
    let minBirthdayValue = this.convertToUnixTime(minBirthday) -this.dateTimezoneOffset;
    
    
    

    let failUpdate = false;

    console.log(joinDateNumber);
    console.log(minJoinDateValue);

    if(joinDateNumber > maxDateValue || joinDateNumber < minJoinDateValue) {
      console.log("Join Date out of bounds!");

      failUpdate = true;
      this.joinDateLimitWarning = true;
    } else {
      this.joinDateLimitWarning = false;
    }
    if(birthdayNumber > maxDateValue || birthdayNumber < minBirthdayValue) {
      console.log("Birthday out of bounds!");
      failUpdate = true;
      this.birthdayLimitWarning = true;
    } else {
      this.birthdayLimitWarning = false;
    }
 
    if(failUpdate) {
      console.log("Out of bounds - cancelling update");
      return;
    }
    

    let fakeUser = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      birthday: birthdayNumber,
      revatureJoinDate: joinDateNumber,
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
    let leaveBoolean = confirm("Leave the page?");
    console.log(leaveBoolean);
  }
  



}

