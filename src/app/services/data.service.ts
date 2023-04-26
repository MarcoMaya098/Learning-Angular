import { Injectable } from '@angular/core';
import { Marca, Modelo } from '../model/model.carsInterface';

@Injectable()
export class DataService {

  private marcas: Marca[] = [
  {
    id : 1,
    name : 'Toyota'
  },
  {
    id : 2,
    name : 'Nissan'
  },
  {
    id : 3,
    name : 'Volskwagen'
  }
];

private modelos : Modelo[] = [
  {
    marcaId : 1,
    name: 'Tacoma'
  },
  {
    marcaId : 1,
    name : 'Hilux'
  },
  {
    marcaId : 2,
    name : 'Versa'
  },
  {
    marcaId : 2,
    name : 'Sentra'
  },
  {
    marcaId : 3,
    name : 'Bochito'
  },
  {
    marcaId : 3,
    name : 'Jetta'
  },
];

  getMarca(): Marca[] {
    return this.marcas;
  }

  getModelo(): Modelo[]{
    return this.modelos;
  }

}
