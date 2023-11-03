import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantasComponent } from './listar-plantas/listar-plantas.component';



@NgModule({
  declarations: [
    ListarPlantasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarPlantasComponent
  ]
})
export class PlantasModule { }
