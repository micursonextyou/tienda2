import { JwtResponceI } from '../interfaces/JwtResponce';
import { log } from 'util';
import { Injectable } from '@angular/core';

import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{tap, catchError} from 'rxjs/operators';
import{Observable,BehaviorSubject, throwError } from 'rxjs';
import{ToastrService} from 'ngx-toastr';




import { User_I } from '../interfaces/User';


@Injectable()
export class UserAuth {
  AUTH_SERVER:string="http://localhost:3000";
  authSubjetc=new BehaviorSubject(false);
  private token:string;
constructor(private http:HttpClient, private toastr:ToastrService) { }

register(user: User_I,cadena:string):Observable<JwtResponceI>{ 
  user.images=cadena;
   
  return this.http.post<JwtResponceI>(this.AUTH_SERVER+'/registro',user)
  .pipe(tap(
    (res:JwtResponceI)=>{             
      if(res){        
        this.saveToken(res.dataU.acessToken,res.dataU.expiresIn,res.dataU._id);

      }
    })
  );
}

login(user:User_I):Observable<JwtResponceI>{
  return this.http.post<JwtResponceI>(this.AUTH_SERVER+'/login',user)
  .pipe(tap(
    (res:JwtResponceI)=>{       
      if(res){               
        
        this.saveToken(res.dataU.acessToken,res.dataU.expiresIn,res.dataU._id);
      }
      
    }
    ),catchError(this.handleError)
  );
}

handleError(Error) {
  if(Error instanceof HttpErrorResponse){
    //server 
    return throwError(Error);
  }
  else{
    // this is client side errror
    return throwError(Error);
  }
    
}

logout(){
  this.token='';
  localStorage.removeItem('ACESS_TOKEN');
  localStorage.removeItem('EXPIRES_IN');

}

private saveToken(token: string, expiresIn: string,id:string):void{
   
  localStorage.setItem("ACESS_TOKEN", token);
  localStorage.setItem("EXPIRES_IN", expiresIn);
  localStorage.setItem("ID", id);
  this.token=token;
  
    
}

getToken():string {
  if(!this.token){
    this.token=localStorage.getItem('ACESS_TOKEN');
  }
  return this.token;
}
getIdUser():string {
  if(this.token){
    
    
    return localStorage.getItem('ID');

  }
   return "dasdasda";
}

Up_load_file(formdata){
  let urlApi="http://localhost:3000/upload";
  return this.http.post(urlApi,formdata);
}

}