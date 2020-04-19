import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogMiTiendaComponent } from '../dialog-mi-tienda/dialog-mi-tienda.component';

@Component({
  selector: 'app-dialog-mis-productos',
  templateUrl: './dialog-mis-productos.component.html',
  styleUrls: ['./dialog-mis-productos.component.css']
})
export class DialogMisProductosComponent implements OnInit {

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