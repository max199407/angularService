import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DCliente } from './empleados.Dcliente';
import { ConsultaService } from '../empleados/consulta.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
})
export class EditarEmpleadoComponent implements OnInit {
cliente: DCliente = new DCliente();
response: any;
@ViewChild('f', {static: false}) from: NgForm;
  constructor(private route: ActivatedRoute,
    private ConsultService: ConsultaService
    ) { 

    this.cliente.idCliente=this.route.snapshot.paramMap.get('id');
    //console.log(this.cliente.idCliente);
    this.getConid();
  }
  getConid(){
  this.ConsultService.consultarId(this.cliente.idCliente)
  .subscribe((data)=>{
       this.response=data;
       this.cliente = this.response.cliente;
       //console.log("metodo consultar por id");
       //console.log(this.response.cliente);
     }
  )
  }
  geteditarRegistro(){
    Swal.fire({
      title: 'Estas seguro de guardar los cambios:',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#59FF31',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    })
    .then((result) => {
      if (result.value) {
          this.ConsultService.editarResgistro(this.cliente)
.subscribe((data)=>{
    this.response=data;
    //console.log(this.response);
     })
        Swal.fire(
          'Cambio ejecutado exitosamente',
        )
      }
    })
  }

  ngOnInit(): void {
  }

}
