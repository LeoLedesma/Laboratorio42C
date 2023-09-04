import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';

//Aca se definen todas las rutas de la aplicación
//Path, component
const routes:Routes = [
  {path: '',component:BienvenidoComponent},  
  {path:'login',component:LoginComponent},  
  {path:'**',component: ErrorComponent,pathMatch: 'full'},     //Crear en shared
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
