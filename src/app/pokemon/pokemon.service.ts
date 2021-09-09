import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService { 

  private _index : number = 0;
  private pokemons: Pokemon[] | undefined;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((_) => console.info('appel ok')),
      //catchError(console.error('Erreur sur l’appel', []) => {})
    );
  }

  //getPokemons(): Pokemon[] { return POKEMONS; }

  getPokemon(id: number): Pokemon {
    this.getPokemons().subscribe(pokemons => this.pokemons = pokemons);    
  
    //@ts-ignore
    for(let index = 0; index < this.pokemons.length; index++) {
      //@ts-ignore
      if(id === this.pokemons[index].id) {
        this._index = index;
      }
    }
    
    //@ts-ignore
    return this.pokemons[this._index];
  }

  editPokemon (pokemon: Pokemon): Pokemon {
    this.http.post('api/pokemons', pokemon);
    //@ts-ignore
    return this.getPokemon(pokemon.id);
  }

  getPokemonTypes(): Array<string> {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electik', 'Poison', 'Fée', 'Vol'];
  }
}