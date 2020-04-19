import { Component, OnInit } from '@angular/core';

import { DialogMiTiendaComponent } from '../dialogs/dialog-mi-tienda/dialog-mi-tienda.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-mi-tienda',
  templateUrl: './mi-tienda.component.html',
  styleUrls: ['./mi-tienda.component.css']
})
export class MiTiendaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  nueva(){
    
    
    const dialogRef = this.dialog.open(DialogMiTiendaComponent, {
      width: '45rem',height:'37.5rem',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('algo');
      
    });
     
      
  }


}
