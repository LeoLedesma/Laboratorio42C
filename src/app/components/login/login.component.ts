import { Component } from '@angular/core';
import { Usuario } from '../../class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public usuario!: Usuario
  public validarLogin = () => {
    
  }
}
