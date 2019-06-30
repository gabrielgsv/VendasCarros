import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'novidades', component: NovidadesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  NovidadesComponent,
  ContatoComponent,
  SobreComponent
]