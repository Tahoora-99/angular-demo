import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSerializer, ParamMap } from '@angular/router';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userName:any;
  password:any;
  
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    
  )
  { 
    console.log(router.url);
  }
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => 
    // console.log(`username:${params.get('userName')}`)

    const value = this.route.snapshot.paramMap.get('userName');
    // localStorage.getItem(("info:"));
    console.log(value);
    
     
 
    }

  
    

}