import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router ,UrlSerializer} from '@angular/router';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    
  )
  { 
    console.log(router.url);
  }
  ngOnInit(): void {
    this.router.navigate(
      ['/app-contact'], 
      { queryParams: { name: 'tahmine' , id:'3'} },
      );
  
  }

  userInfo(){
  this.route.queryParams.subscribe(params => {
    console.log(params);
    // this.user.name=params.;
  });
}

}
