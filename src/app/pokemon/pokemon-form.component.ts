import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemon.service';
import { Pokemon } from './pokemon';
  
@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemons/pokemon-form.component.html',
    styleUrls: ['./pokemons/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  
    @Input() pokemon: Pokemon | undefined; // propriété d'entrée du composant
    types: Array<string> | undefined; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...

    constructor(
        private pokemonsService: PokemonsService,
        private router: Router) { }
  
    ngOnInit() {
        // Initialisation de la propriété types
        this.types = this.pokemonsService.getPokemonTypes();
    }
  
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    /* hasType(type: string): boolean {
        let index = this.pokemon.types).indexOf(type);
        if (index > -1) return true;
        return false;
    }//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
  
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    selectType($event: any, type: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        } else {
            let index = this.pokemon.types.indexOf(type);
            if (index > -1) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }
  
    // Valide le nombre de types pour chaque pokémon
    isTypesValid(type: string): boolean {
        if (this.pokemon.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
  
        return true;
    }
  
    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        console.log("Submit form !");
        let link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
    } */
  
}