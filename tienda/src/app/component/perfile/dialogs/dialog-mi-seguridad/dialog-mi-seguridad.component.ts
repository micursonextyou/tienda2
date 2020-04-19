import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogMiTiendaComponent } from '../dialog-mi-tienda/dialog-mi-tienda.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-mi-seguridad',
  templateUrl: './dialog-mi-seguridad.component.html',
  styleUrls: ['./dialog-mi-seguridad.component.css']
})
export class DialogMiSeguridadComponent implements OnInit {

  firstFormGroup: FormGroup;
	constructor(
		public dialogRef: MatDialogRef<DialogMiTiendaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: 'ggggggggggggggg',
    private _formBuilder: FormBuilder) {}
    onNoClick(): void {
      this.dialogRef.close();
    }


  ngOnInit() {
  }

  

}

