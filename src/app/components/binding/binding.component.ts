import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  public name:string = "Angular";
  public apellido:string = "";
  public btnLabel = "Click me";

  /*
  bindeo: 
  {{}} - Interpolacion: controlador -> Vista
  []  - Property Binding: Vista <- Controlador Lo que este a la derecha del igual lo va a buscar al controlador
  () - Event Binding: 

  
  */

  public onClick(event:any):void{
    console.log(event);
  }
}
