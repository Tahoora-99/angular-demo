import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { User } from '../shared/_services/user';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userName: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: User


  ) {
    // console.log(router.url);
  }
  arrayData: any[]
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => 
    // console.log(`username:${params.get('userName')}`)
    // if (!localStorage.getItem("info:")){
    //   // if (localStorage.length == 0){
    //   console.log("you are not allowed to accesse this page!");

    const value = this.route.snapshot.paramMap.get('userName');
    // localStorage.getItem(("info:"));
    console.log(value);

    this.user.getAllUser().subscribe((user) => {
      this.arrayData = user
      console.log(this.arrayData)
    }
    );


  }
  userInfo(arrayDatas) {
    this.router.navigate(['/app-profile',arrayDatas])

  }


}




