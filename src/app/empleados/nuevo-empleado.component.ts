import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from '../empleados/consulta.service';
import { DCliente } from './empleados.Dcliente';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
})
export class NuevoEmpleadoComponent implements OnInit {
  response: any;
  cliente: DCliente = new DCliente();
  ngForm: any;
  @ViewChild('f', {static: false}) from: NgForm;
  constructor(private ConsultService: ConsultaService) { 
  }
  agregarRegistro(){
    this.ConsultService.nuevoRegistro(this.cliente)
    .subscribe((data)=>{
      this.response = data;
      if(this.response.codeError=="DAE000") {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.response.messageError,
          showConfirmButton: false,
          timer: 2000
        })
    this.from.resetForm();
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Id Duplicado',
        })
      }
      //console.log("metodo agregarrrrrrrrr");
      //console.log(this.response);
    })
  }
  ngOnInit(): void {
  }
}
