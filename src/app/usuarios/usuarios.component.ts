import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Lucas','Gabriel','Airton','Kewyn'];

   }

  ngOnInit() {
  }

}
