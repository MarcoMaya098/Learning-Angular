import { Component, OnInit } from '@angular/core';
import { Marca, Modelo, Carro } from 'src/app/model/model.carsInterface';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
  providers: [DataService]

})






export class Form2Component implements OnInit {

  public marcas : Marca[] = [];
  public modelos : Modelo[] = [];
  public selectedMarca : Marca = { id: 0, name: ''};
  public selectedModelo : Modelo = { marcaId: 0, name: ''};
  public carros : Carro[] = [];
  constructor (private dataSvc: DataService) {}

  ngOnInit(): void {
    this.marcas = this.dataSvc.getMarca();
  }

  CarroSelected(event:any){
    const marcaSeleccionada = event.target.value;
    const newMarca = this.marcas.find(marca => marca.name == marcaSeleccionada)
    const IdMarca = newMarca?.id;
    this.modelos = this.dataSvc.getModelo().filter(modelo => modelo.marcaId == IdMarca);
    this.selectedModelo.name = '';
  }

  onSubmit(values: any): void {
    console.log(values)
    if(values.Rmarca!== "" && values.Rmodelo !== ""){
    this.carros.push({ marca: values.Rmarca, modelo: values.Rmodelo });
  }else{
   alert('no se puede prro');
    }
  }
}
