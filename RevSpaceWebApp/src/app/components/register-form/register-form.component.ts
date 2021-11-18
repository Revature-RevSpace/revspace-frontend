import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userDob: string;
  userPassword: string;
  userConfirmPassword: string;
  userDOBNum: number;
  differentPasswords: string = "Passwords do not match";
  noFirstName: string = "Please Input Valid First Name";
  noLastName: string = "Please Input Valid Last Name";
  noEmail: string  = "Please Input Valid Email";
  noDob: string = "Please Valid Input Date of Birth";
  correctInfo: boolean;



  
  
  Register(){
    if (this.userPassword != this.userConfirmPassword){
      
      this.correctInfo = false;
    } else if (!this.userEmail){
      
      this.correctInfo = false;

    } else if (!this.userFirstName){
      
      this.correctInfo = false;
    } else if (!this.userLastName){
      
      this.correctInfo = false;
    }else if (!this.userDob){
      
      this.correctInfo = false;
    }
    else{
      this.correctInfo = true;
      
  }
  if(this.correctInfo){
    console.log(this.userFirstName);
      console.log(this.userLastName);
      console.log(this.userEmail);
      console.log(this.userDob);
      console.log(this.userPassword);
      console.log(this.userConfirmPassword);
  }
    
  }



}
