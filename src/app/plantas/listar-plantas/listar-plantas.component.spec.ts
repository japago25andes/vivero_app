import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPlantasComponent } from './listar-plantas.component';
import { PlantasService } from '../planta.service';
import { of } from 'rxjs';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let mockPlantaService : any;

  beforeEach(async () => {
    mockPlantaService = jasmine.createSpyObj(['getPlantas']);

    await TestBed.configureTestingModule({
      declarations: [ ListarPlantasComponent ],
      providers: [
        { provide: PlantasService, useValue: mockPlantaService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;

    // Mock del servicio para retornar tres plantas
    mockPlantaService.getPlantas.and.returnValue(of([
      { id: 1, nombre_comun: 'Planta 1', tipo: 'interior', clima: 'templado' },
      { id: 2, nombre_comun: 'Planta 2', tipo: 'exterior', clima: 'cálido' },
      { id: 3, nombre_comun: 'Planta 3', tipo: 'interior', clima: 'frío' }
    ]));

    fixture.detectChanges(); // Ejecuta la detección de cambios (llama a ngOnInit)
  });

  it('debe crear una tabla con tres filas más el encabezado', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tr');
    
    expect(rows.length).toBe(4); // 3 filas de datos + 1 fila de encabezado
  });
});
