import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from './consulta.service';
import { DCliente } from './empleados.Dcliente';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {
   response: any;
   lista: any;
   cliente: DCliente = new DCliente();
   editarCli: DCliente = new DCliente();
   @ViewChild('f', {static: false}) from: NgForm;
  constructor(private ConsultService: ConsultaService) {
    //console.log(ConsultaService.consultRegistros());
  }

   getconsultar(){
    this.ConsultService.consultRegistros()
    .subscribe((data) => { 
        this.response = data;
        if(this.response.codeError=="Error") {
          Swal.fire({
            title: 'No existen registros',
            showClass: {
            popup: 'animated fadeInDown faster'
                    },
            hideClass: {
            popup: 'animated fadeOutUp faster'
                      }
          })
        }
        this.lista = this.response.lista_CLIENTES;
        //console.log("metodo consultar todo");
        //console.log(this.response);
      })
   }

   getEliminar(id:string){
     //console.log("metodo eliminar");
     //console.log(id);
        Swal.fire({
          title: 'Estas seguro de eliminar el id:',
          text: id,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#59FF31',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.value) {
              this.ConsultService.EliminarId(id)
   .subscribe((data)=>{
        this.response=data;
        //console.log(this.response);
        this.getconsultar();
         })
            Swal.fire(
              'Eliminado!',
            )
          }
        })
   }

  ngOnInit(): void {
    this.getconsultar();
  }
}