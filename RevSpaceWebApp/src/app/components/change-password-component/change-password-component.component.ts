import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from 'src/app/services/change-password.service';

@Component({
  selector: 'app-change-password-component',
  templateUrl: './change-password-component.component.html',
  styleUrls: ['./change-password-component.component.css']
})



export class ChangePasswordComponentComponent implements OnInit{

  userForm = new FormGroup({
     email:new FormControl(''),
     Oldpassword: new FormControl(''),
     Newpassword: new FormControl('')
    
  });


  constructor(private ChangePasswordService: ChangePasswordService, public router: Router) { }

  ngOnInit(): void {

  }

  changePassword(userForm:FormGroup){
    console.log("change");
    //this.router.navigate(['/change-password-component'])
    let user = JSON.stringify(userForm.value);
    this.ChangePasswordService.changePassword(user).subscribe(
      response =>{
        this.router.navigate(["/login"]);
      },
      error=>{
        console.log(user);
        console.warn("Error");
      }

    );



  }
}