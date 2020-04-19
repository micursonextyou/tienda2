import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Tiendas_I } from 'src/app/interfaces/Tiendas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadorEmail } from 'src/app/directivas/validadorEmail.directive';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-dialog-mi-tienda',
  templateUrl: './dialog-mi-tienda.component.html',
  styleUrls: ['./dialog-mi-tienda.component.css']
})
export class DialogMiTiendaComponent implements OnInit {
	firstFormGroup: FormGroup;
	constructor(
		public dialogRef: MatDialogRef<DialogMiTiendaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: 'ggggggggggggggg',
		private _formBuilder: FormBuilder) {}


   

  ngOnInit() {
	this.firstFormGroup = this._formBuilder.group({
//  Datos de  la  Tineda.
		nombre:['',{ validators:[Validators.required],updateOn: "onblur"}],
		telefono:['',{ validators:[Validators.required],updateOn: "onblur"}],
		direccion:['',{ validators:[Validators.required],updateOn: "onblur"}],
// Datos de rede sosciales		
		facebook:['', { validators:[Validators.required],updateOn: "onblur"}],
		instagram:['', { validators:[Validators.required],updateOn: "onblur"}],
//   Validadroes persinalisados
		email:['',  { validators:[ValidadorEmail()],updateOn: "onblur"}],	
//   no querien valiudacio.
		images:''
	   
	  });


    

  }

  ////////////////////////////////////////////


  onNoClick(): void {
    this.dialogRef.close();
  }

}
