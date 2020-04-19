import { UserAuth } from './../../../services/UserAuth.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../../../../node_modules/angularx-social-login/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "./../../../../../node_modules/angularx-social-login/angularx-social-login";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  frmLogin:FormGroup;

  constructor( private _builder:FormBuilder,private toastr:ToastrService, private UserAuth:UserAuth, private router:Router) { 
    this.frmLogin=this._builder.group({
      email:new FormControl(""),
      pass:new FormControl("")
    });
  }

  ngOnInit() {  }


  signInWithEmailAndPass(form):void{
    this.UserAuth.login(form.value).subscribe(
      res=>{
      this.router.navigateByUrl('/inicio');
    },
    err=> { 
      console.log("error");
      this.toastr.error("verifique los datos Ingresados","",{timeOut: 3000, positionClass: 'toast-top-center' } );
    }
    );
  }

}
