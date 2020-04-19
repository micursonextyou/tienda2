import {AbstractControl} from '@angular/forms';

export function cfPassValidator(control:AbstractControl){

    if(control &&(control.value!==null && control.value!==undefined )){
        const cfpassValue=control.value;
        const passControl=control.root.get('clave');
        if(passControl){
            const passValue=passControl.value;
            if(passValue!==cfpassValue){
                return {
                    isError:true
                };

            }

        }
    }
    return null;

} 

export function PassValidator(control:AbstractControl){
    if(control &&(control.value!==null && control.value!==undefined )){
        const password=<string>control.value;
    if(!password){
        return {'passwordValidators':{'message':'Campo obligatorio'}};;
    }
    if(password.length<7){
      return {'passwordValidators':{'message':'Debe ser mayor a 8 caracteres'}};;  
    }
    if(this.passwordsProividos.indexOf(password)!==-1){
      return {'passwordValidators':{'message':'Clave vulnerable'}};
    }
    if(password===password.toLocaleUpperCase()){
      return {'passwordValidators':{'message':'Debe contener al menos una minusculas'}};
    }
    if(password===password.toLocaleLowerCase()){
      return {'passwordValidators':{'message':'Debe contener al menos una mayuscula'}};
    }
    if(!/\d/.test(password)){      
      return {'passwordValidators':{'message':'Debe contener al menos un numero'}};

    }
    }
}
export function EmailValidator(control:AbstractControl){

    let emailPattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const email=<string>control.value;
      if(!email){
        return  {'emailValidators':{'message':'Campo Obligatorio'}};
      }
      if(email.length<7){
        return  {'emailValidators':{'message':'Debe tener mas de 7 caracteres'}};
      }
      if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return  {'emailValidators':{'message':'Formato de correo invalido'}};
      }
      
    }