import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemon.service';
  
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListPokemonsComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }