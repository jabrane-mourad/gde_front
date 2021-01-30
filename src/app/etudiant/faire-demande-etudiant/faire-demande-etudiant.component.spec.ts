import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDemandeEtudiantComponent } from './faire-demande-etudiant.component';

describe('FaireDemandeEtudiantComponent', () => {
  let component: FaireDemandeEtudiantComponent;
  let fixture: ComponentFixture<FaireDemandeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireDemandeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireDemandeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
