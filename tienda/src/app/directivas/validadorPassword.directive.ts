import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';


export function ValidadorPassword():ValidatorFn{
  return (control:AbstractControl)=>{

    const emailValid=new ValidadorPasswordDirective();
    return emailValid.validate(control);
  }

}


@Directive({
  selector: '[ValidadorPassword]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ValidadorPasswordDirective,
    multi:true
}]
})
export class ValidadorPasswordDirective {

  passwordsProividos=['123','1234567890','12345678'];
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const password=<string>control.value;
    if(!password){
        return {'ValidadorPassword':{'message':'Campo obligatorio' }};
    }
    if(password.length<7){
      return {'ValidadorPassword':{'message':'Debe ser mayor a 8 caracteres'}}; 
    }
    if(this.passwordsProividos.indexOf(password)!==-1){
      return {'ValidadorPassword':{'message':'Clave vulnerable'}};
    }
    if(password===password.toLocaleUpperCase()){
      return {'ValidadorPassword':{'message':'Debe contener al menos una minusculas'}};
    }
    if(password===password.toLocaleLowerCase()){
      return {'ValidadorPassword':{'message':'Debe contener al menos una mayuscula'}};
    }
    if(!/\d/.test(password)){      
      return {'ValidadorPassword':{'message':'Debe contener al menos un numero'}};

    }
    return null;

  }

  constructor() { }

}
