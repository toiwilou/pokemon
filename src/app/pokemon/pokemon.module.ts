import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
  
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemon.service';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';
import { PokemonFilterComponent } from './pokemon-filter.component';
import { LoginComponent } from './login/login.component';
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ListPokemonsComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        EditPokemonComponent,
        DeletePokemonComponent,
        PokemonFormComponent,
        PokemonFilterComponent,
        LoginComponent,
    ],
    providers: [PokemonsService,],
})
export class PokemonsModule { }