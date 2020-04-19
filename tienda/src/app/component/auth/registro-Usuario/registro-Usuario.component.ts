import { Router } from '@angular/router';
import { PhotoI } from './../../../interfaces/Photo';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserAuth } from 'src/app/services/UserAuth.service';
import { ValidadorEmail } from 'src/app/directivas/validadorEmail.directive';
import { ValidadorPassword } from 'src/app/directivas/validadorPassword.directive';
import { ValidadorCFPassword } from 'src/app/directivas/validadorCFPassword.directive';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-registro-Usuario',
  templateUrl: './registro-Usuario.component.html',
  styleUrls: ['./registro-Usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formulario:FormGroup;
  TFormGroup: FormGroup;
  uploadfile: Array<File>;
  urlfile:string;

  constructor(private _formBuilder: FormBuilder,private authUser:UserAuth,private router:Router) { 
   
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email:['',  { validators:[ValidadorEmail()],updateOn: "onblur"}],
      pass:['',{ validators:[ ValidadorPassword()],updateOn: "onblur"}],
      cfpass:['', { validators:[ValidadorCFPassword()],updateOn: "onblur"}],
      images:''
     
    });
    this.secondFormGroup = this._formBuilder.group({
      nombre: ['', { validators:[Validators.required],updateOn: "onblur"}],      
      apellido:['', { validators:[Validators.required],updateOn: "onblur"}],
      dni:['', { validators:[Validators.required],updateOn: "onblur"}],
      direccion:['', { validators:[Validators.required],updateOn: "onblur"}],
      ciudad:['', { validators:[Validators.required],updateOn: "onblur"}],        
      provincia:['', { validators:[Validators.required],updateOn: "onblur"}],
      pais:['', { validators:[Validators.required],updateOn: "onblur"}],
      telefono:['', { validators:[Validators.required],updateOn: "onblur"}],
      f_nacimiento:['', { validators:[Validators.required],updateOn: "onblur"}],
    });
    this.TFormGroup = this._formBuilder.group({
      facebook:'',
      instagram:''
    });

    this.subirfoto();
  }
  //set and get
  get email(){ return this.firstFormGroup.get('email');}
  get pass(){ return this.firstFormGroup.get('pass');}
  get cfpass(){return this.firstFormGroup.get('cfpass');}
  get nombre(){return this.secondFormGroup.get('nombre');}
  get apellido(){ return this.secondFormGroup.get('apellido');}
  get dni(){ return this.secondFormGroup.get('dni');}
  get direccion(){return this.secondFormGroup.get('direccion');}
  get ciudad(){return this.secondFormGroup.get('ciudad');}
  get provincia(){return this.secondFormGroup.get('provincia');}
  get pais(){return this.secondFormGroup.get('pais');}
  get telefono(){ return this.secondFormGroup.get('telefono');}
  get f_nacimiento(){return this.secondFormGroup.get('f_nacimiento');}
 


  ////////////////////////////////////////////////////
  
  // en este metodo pas los valores para guardae en bse de datos
 valores(){

   this.formulario=this._formBuilder.group({
         email:this.firstFormGroup.get('email'),
         pass:this.firstFormGroup.get('pass'),
         images:this.firstFormGroup.get('images'),
         nombre: this.secondFormGroup.get('nombre'),
         apellido: this.secondFormGroup.get('apellido'),
          dni:this.secondFormGroup.get('dni'),
          direccion:this.secondFormGroup.get('direccion'),
          ciudad:this.secondFormGroup.get('ciudad'),        
          provincia:this.secondFormGroup.get('provincia'),
          pais:this.secondFormGroup.get('pais'),
          telefono:this.secondFormGroup.get('telefono'),
          f_nacimiento:this.secondFormGroup.get('f_nacimiento'),
          facebook:this.TFormGroup.get('facebook'),
          instagram:this.TFormGroup.get('instagram')
   });
 } 



// funciones
  subirfoto(){
    $(function(){
      $('img').on('click', function(event) {
        $("#inpfile").click();  
        $('#inpfile').change(function(e){ 
              var input = e.target;
            if (input.files && input.files[0]) {
              var file = input.files[0];          
              var reader = new FileReader();          
              reader.readAsDataURL(file);              
              reader.onload = function(e) {                
                $('.img').attr('src', reader.result);
              }
            }
        });   
      });
     
    });
  }
  
  foto(e){  this.uploadfile=e.target.files;}
  SubirArchivo(){
    let formdata=new FormData();
    for(let i=0;i<this.uploadfile.length;i++){      
      formdata.append("images",this.uploadfile[i],this.uploadfile[i].name);
    }    
    // llamar servicio.
    this.authUser.Up_load_file(formdata).subscribe((res:PhotoI)=>{
      
        this.urlfile='../../../../assets/photos/'+res.image.filename;
        //console.log(this.urlfile);
            });
  }

  GuardarUsuario(){
    this.valores();   
    this.SubirArchivo();    
   this.authUser.register(this.formulario.value,this.urlfile).subscribe(res =>{
       this.router.navigateByUrl('/inicio');
    })
  }




}
