import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function ValidadorCFPassword():ValidatorFn{
  return (control:AbstractControl)=>{

    const cfpass=new ValidadorCFPasswordDirective();
    return cfpass.validate(control);
  }

}

@Directive({
  selector: '[ValidadorCFPassword]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ValidadorCFPasswordDirective,
    multi:true
}]
})
export class ValidadorCFPasswordDirective {

  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
    
    const cfpassword=<string>control.value;
    
      
      const passControl=control.root.get('pass');
      if(!cfpassword){ return {'ValidadorCFPassword':{'message':'Campo obligatorio'}};}
      if(passControl){
        
          const passValue=passControl.value;
          if(passValue!==cfpassword){
              return {'ValidadorCFPassword':{'message':'las claves no coiciden'}};

          }

      }
  
  return null;

  }


  constructor() { }

}
