import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {
  constructor() {
    this.valor = ['uno', 'dos'];
  }
  valor: Array<any>;
  ngOnInit(): void {}

  addNew() {
    console.log('Se intenta agregar');
    this.valor.push((this.valor.length + 1).toString());
  }
}
