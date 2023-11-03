import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { PlantasService } from './planta.service';

describe('PlantaService', () => {
  let service: PlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
