import { Component } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.scss']
})
export class EdadComponent {
  public edadUno: number = 0;
  public edadDos: number = 0;
  public resultado: number = 0;

  calcular(){
    console.log("Calculado");
    this.resultado = this.edadUno + this.edadDos;
  }

  limpiar(){
    this.edadDos = 0;
    this.edadUno = 0;
    this.resultado = 0;
  }
}
