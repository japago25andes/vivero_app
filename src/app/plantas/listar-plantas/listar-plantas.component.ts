import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../planta.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  plantas: Planta[] = [];
  interiorCount: number = 0;
  exteriorCount: number = 0;

  constructor(private plantasService: PlantasService) { }

  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(data => {
      this.plantas = data;

      // Calcular el número de plantas de interior y de exterior
      this.interiorCount = this.plantas.filter(planta => planta.tipo === 'Interior').length;
      this.exteriorCount = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
    });
  }
}
