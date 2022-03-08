import { Component, OnInit } from '@angular/core';
import { User } from '../shared/_services/user';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginInfo:any;
  imageToShow:any
  
  
  constructor(
  private user:User,
  private route: ActivatedRoute
  ) { }
    
  ngOnInit(): void {
    const value = this.route.snapshot.paramMap.get('login')
    this.user.getUser(value).subscribe((user:any) => {
      this.loginInfo = user;
      console.log(this.loginInfo)
    }
    )

    let reader = new FileReader();
    const avatar = this.route.snapshot.paramMap.get('')
    // this.user.getImage(avatar).subscribe((user:any) =>{
    //   this.imageToShow = reader.result;
    // })
    
  };

}

