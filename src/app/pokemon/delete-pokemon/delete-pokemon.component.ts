import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'app-delete-pokemon',
  templateUrl: './delete-pokemon.component.html',
  styleUrls: ['./delete-pokemon.component.css']
})
export class DeletePokemonComponent implements OnInit {

  mes: string | undefined;

  constructor(
    private pokemonService: PokemonsService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mes = this.pokemonService.deletePokemon(+ this.route.snapshot.params.id);
  }

}
