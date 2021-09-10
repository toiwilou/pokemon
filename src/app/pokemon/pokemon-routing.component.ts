import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
  
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'pokemons', component: ListPokemonsComponent, canActivate: [AuthGuardService] },
    { path: 'pokemons/:id', component: DetailPokemonComponent },
    { path: 'pokemons/edit/:id', component: EditPokemonComponent },
    { path: 'pokemons/delete/:id', component: DeletePokemonComponent },
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }