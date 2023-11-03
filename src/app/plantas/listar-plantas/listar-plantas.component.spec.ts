import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlantasComponent } from './listar-plantas.component';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlantasComponent]
    });
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
