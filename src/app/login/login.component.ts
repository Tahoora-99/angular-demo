import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../services/user';
import { AuthenticationService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInformation : FormGroup;  

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService
  ) { 
    //navigate to registry if doesnt 
     if (!this.authenticationService.getUser()){
       this.router.navigate['/registry'];
     }

   }

  ngOnInit(): void {
    this.userInformation = new FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
      //this.form.controls["firstName"].setValidators([Validators.minLength(1), Validators.maxLength(30)]);
      
    })

    // this.route.queryParams.subscribe(params => {
    //   this.userInformation.controls['userName'] = params['userName'];
    // });
    
  }
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
    // console.log(JSON.stringify(this.userInformation.value));
    // const value = JSON.stringify(this.userInformation.value)
    localStorage.setItem("info:",JSON.stringify( this.userInformation?.value));
    const value = this.userInformation.get('userName')?.value
    this.router.navigate(['/app-contact',value]);
    
    }

}
