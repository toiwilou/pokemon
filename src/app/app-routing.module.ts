import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PokemonRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
