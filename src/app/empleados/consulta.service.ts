import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { DCliente } from './empleados.Dcliente';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
API = 'http://localhost:8080/clientes';

  constructor(private http:HttpClient) {
  }
  consultRegistros(){
    return this.http.get(this.API + '/');
  }
  EliminarId(id:string){
    return this.http.delete(this.API+'/'+id);
  }
  nuevoRegistro(datos: DCliente){
  return this.http.post(this.API + '/',datos);
  }
  consultarId(id:string){
    return this.http.get(this.API+'/'+id);
  }
  editarResgistro(editarD: DCliente){
    return this.http.put(this.API+'/'+ editarD.idCliente, editarD);
  }

}
