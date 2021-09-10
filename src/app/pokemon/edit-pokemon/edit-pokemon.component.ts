import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';
  
@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css'],
})
export class EditPokemonComponent implements OnInit {
  
  pokemon: Pokemon | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private router: Router  
  ) {}
  
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.pokemonsService.getPokemon(id);
  }
}
