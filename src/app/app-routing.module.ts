import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsComponent } from './pets-module/components/cats/cats.component';
import { DogsComponent } from './pets-module/components/dogs/dogs.component';
import { BirdsComponent } from './pets-module/components/birds/birds.component';

const routes: Routes = [

  {path:'cats', component:CatsComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'birds', component :BirdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
