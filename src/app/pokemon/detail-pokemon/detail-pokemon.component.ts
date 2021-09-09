import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonsService,  
  ) { }

  pokemons: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;

  ngOnInit (): void {
    this.pokemon = this.pokemonService.getPokemon(+ this.route.snapshot.params.id);
  } 

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
  
  goEdit(pokemon: Pokemon) {
    let link = ['/pokemons/edit', pokemon.id];
    this.router.navigate(link);
  }
}
