import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado.component';


const routes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'editar/:id', component: EditarEmpleadoComponent },
  { path: 'agregar/put', component: NuevoEmpleadoComponent },
  { path: '',redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
