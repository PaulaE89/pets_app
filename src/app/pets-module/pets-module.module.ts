import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './components/cats/cats.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { BirdsComponent } from './components/birds/birds.component';



@NgModule({
  declarations: [CatsComponent, DogsComponent, BirdsComponent],
  imports: [
    CommonModule
  ]
})
export class PetsModuleModule { }
