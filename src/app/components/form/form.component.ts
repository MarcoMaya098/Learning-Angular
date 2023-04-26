import { Component, OnInit } from '@angular/core';
import { pokemonInterface } from 'src/app/model/model.carsInterface';
import { PokemonesDataService } from 'src/app/services/pokemones-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
   providers: [PokemonesDataService]
})

export class FormComponent implements OnInit {
  
   pokemonInterface : pokemonInterface[] = [];
   pokemon3 : pokemonInterface = {name: '', url: ''}
  pokemones: any = {};
  pokemones2: any = {};
  letra: string = 'p';
  pokemonInterface2 : pokemonInterface[] = [];

  constructor (private dataSvc: PokemonesDataService) {}

  ngOnInit(): void {

    this.dataSvc.getPokemon().subscribe(pokemon => {
      // this.pokemones = pokemon.results.sort((a:any, b: any) => a.name.localeCompare(b.name));
      this.pokemones = pokemon.results.sort((a:any, b:any) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    });

    this.dataSvc.getPokemon().subscribe(pokemonLetter => {
       //this.pokemones2 = pokemonLetter.results.filter((pokemon: any) => pokemon.name.startsWith('c'));
       this.pokemones2 = pokemonLetter.results.filter((pokemon: any) => pokemon.name[0].toLowerCase().includes(this.letra));

      // for (let i = 0; i < this.pokemones.length; i++) {
      //   if (this.pokemones[i].charAt(0) === 'p') {
      //     console.log(this.pokemones[i]);
      //   }
      // }
       
    });


    
    //  this.pokemones2 = objetcPokemon.sort((a:any, b: any) => {
    //     if(a.name < b.name){
    //       return -1;
    //     }
    //     if(a.name < b.name){
    //       return 1;
    //     }
    //     return 0;

    //   });
}

// trackByFn(index: number, item: any): any {
//   return pokemonInterface2;
// }
  // CarroSelected(event:any){
  //   const marcaSeleccionada = event.target.value;
  //   const newMarca = this.marcas.find(marca => marca.name == marcaSeleccionada)
  //   const IdMarca = newMarca?.id;
  //   this.modelos = this.dataSvc.getModelo().filter(modelo => modelo.marcaId == IdMarca);
  //   this.selectedModelo.name = '';
  // }

  onSubmit(values: any): void {
    //console.log(values)
    
    if(values.Rmarca!== ""){
    this.pokemonInterface.push({ name: values.Rmarca, url: ''});
    this.pokemonInterface2 = 
    this.pokemonInterface.filter((name:any, index:any, self:any) => self.indexOf(name) == index);
      console.log(this.pokemonInterface2)
    }else{
   alert('no se puede prro');
    }

    
  }
}
