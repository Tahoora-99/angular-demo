import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({ // now we can inject this service anywhere in app:
    providedIn:"root",
})

export class User{
    constructor(
        private http:HttpClient
    ){}
    getAllUser():Observable<[]>{
        return this.http.get<[]>('https://api.github.com/users') 
    }
    getUser(login:any){
        return this.http.get(`https://api.github.com/users/${login}`)
    }

    // getImage(imgUrl:any){
    //     //spcify by setting other type of response : 
    //     return this.http.get(imgUrl, { responseType: 'blob' })
      
    // }
}
