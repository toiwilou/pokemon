import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  title: string = "Liste des pokémons";
  pokemons: Pokemon[] | undefined;

  constructor (
    private router: Router,
    private pokemonService: PokemonsService,  
  ) { }

  ngOnInit (): void {
    //this.pokemons = this.pokemonService.getPokemons();
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  } 

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
