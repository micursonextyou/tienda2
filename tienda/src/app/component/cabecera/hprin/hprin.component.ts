import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './hprin.component.html',
  styleUrls: ['./hprin.component.css']
})
export class HprinComponent implements OnInit {

  s
  public mostrar:boolean;

  constructor() { }

  ngOnInit() {
    this.mostrar=false;
    

  }

}
