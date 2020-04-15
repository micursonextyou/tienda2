import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{tap} from 'rxjs/operators';
import{Observable,BehaviorSubject } from 'rxjs';
import { User_I } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
    AUTH_SERVER:string="http://localhost:3000";

    constructor(private http:HttpClient) { }
    
    GeProfielUser(id: string){  
      return this.http.get(this.AUTH_SERVER+`/getUserProfile/${id}`);
    
    }
    PutPrfileUser(Up_User:User_I){

    }
}
