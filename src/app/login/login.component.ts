import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInformation : FormGroup;
  // submitted : boolean = true;

  constructor(
  ) { }

  ngOnInit(): void {
    this.userInformation = new FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
      //this.form.controls["firstName"].setValidators([Validators.minLength(1), Validators.maxLength(30)]);
    })
    
  }
  // login(){

  // }

 

  onSubmit(){
    // console.log(this.userInformation);

    //checks if the value of userInformation are valid or not
    console.log('Valid?',this.userInformation.valid); 

    //??
    // console.log(this.userInformation.controls);

    // use this method to get straightforward value of formcontrol:  
    // console.log(JSON.stringify(this.userInformation.get('userName')?.value));

    //???
    // console.log(JSON.stringify(this.userInformation.controls['password']?.value));

    //access both username nad password value directly:
    console.log(JSON.stringify(this.userInformation.value));
    const value = JSON.stringify(this.userInformation.value)
    localStorage.setItem("info:", value);
    alert(localStorage.getItem("info:"));


    }
  

  // ngAfterViewInit(){

  // }

}
