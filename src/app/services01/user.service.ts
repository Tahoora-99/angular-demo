import {User} from './user'
export class AuthenticationService{
    getUser(){
        let user:User[];
        user=[
            new User("t",1,"tahmine"),
            new User("m",3,"mahdis"),
        ]
        return user;
    }

}