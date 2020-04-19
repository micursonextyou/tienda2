import { DialogMiSeguridadComponent } from './../dialogs/dialog-mi-seguridad/dialog-mi-seguridad.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  seguridad(){
    
    
    const dialogRef = this.dialog.open(DialogMiSeguridadComponent, {
      width: '45rem',height:'35rem',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('algo');
      
    });
     
      
  }

}
