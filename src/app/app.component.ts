import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimerClase';
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
