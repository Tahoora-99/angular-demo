import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

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

}
