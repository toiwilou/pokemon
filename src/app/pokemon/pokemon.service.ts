import { Injectable } from '@angular/core';
import { POKEMONS } from './mocks-pokemons';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonsService { 

    private _index : number = 0;

    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
            this._index = index;
        }
      }

      return pokemons[this._index];
    }

    getPokemonTypes(): Array<string> {
      return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electik', 'Poison', 'Fée', 'Vol'];
    }
}