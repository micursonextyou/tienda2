import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, Validators, FormControl } from '@angular/forms';


export function ValidadorEmail():ValidatorFn{
  return (control:AbstractControl)=>{

    const emailValid=new ValidadorEmailDirective();
    return emailValid.validate(control);
  }

}

@Directive({
  selector: '[ValidadorEmail]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ValidadorEmailDirective,
    multi:true
}]
})
export class ValidadorEmailDirective implements Validators {
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
    
    const email=<string>control.value;
    if(!email){
      return  {'ValidadorEmail':{'message':'Campo Obligatorio'}};
    }
    if(email.length<7){
      return  {'ValidadorEmail':{'message':'Debe tener mas de 7 caracteres'}};
    }
    if(!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
      return  {'ValidadorEmail':{'message':'Formato de correo invalido'}};
    }
    return null;
    
  }

  constructor() { }

}
