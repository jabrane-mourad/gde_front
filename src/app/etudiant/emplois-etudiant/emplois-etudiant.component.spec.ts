import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisEtudiantComponent } from './emplois-etudiant.component';

describe('EmploisEtudiantComponent', () => {
  let component: EmploisEtudiantComponent;
  let fixture: ComponentFixture<EmploisEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploisEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploisEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
