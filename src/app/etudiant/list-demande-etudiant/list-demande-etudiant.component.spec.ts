import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeEtudiantComponent } from './list-demande-etudiant.component';

describe('ListDemandeEtudiantComponent', () => {
  let component: ListDemandeEtudiantComponent;
  let fixture: ComponentFixture<ListDemandeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemandeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
