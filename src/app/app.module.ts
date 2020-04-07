import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ConsultaService } from './empleados/consulta.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado.component';
import Swal  from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    EditarEmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
