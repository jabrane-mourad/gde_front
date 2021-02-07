import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cours-etudiant',
  templateUrl: './cours-etudiant.component.html',
  styleUrls: ['./cours-etudiant.component.css']
})
export class CoursEtudiantComponent implements OnInit {
  apiMoules = 'http://localhost:8080/etudiants/modules?';
  apiMoulesByMotCle = 'http://localhost:8080/etudiants/modulesByMotCle?';
  api = '';
  semestre = 's1';
  niveau = '';
  filiere = '';
  listModule: any;
  pdfSrc = '';
  useBrowserLocale = true;
  displayCours = 'none';
  motCle = '';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.niveau = this.tokenStorage.getUser().utilisateur.niveau;
      this.filiere = this.tokenStorage.getUser().utilisateur.filiere;
    }
    this.getModules();
  }

  public getModules(): void {
    this.displayCours = 'none';
    this.api = this.apiMoules + 'nom=' + this.semestre + '&niveau=' + this.niveau + '&filiere=' + this.filiere;
    this.http.get(this.api).subscribe(data => {
        this.listModule = data;
      }, error => {
        console.log(error);
      }
    );
  }

  viewCours(url: string): void {
    this.displayCours = 'block';
    this.pdfSrc = url;
  }

  rechercher(): void {
    this.displayCours = 'none';
    this.api = this.apiMoulesByMotCle + 'nom=' + this.semestre + '&niveau=' + this.niveau
      + '&filiere=' + this.filiere + '&motCle=' + this.motCle;
    this.http.get(this.api).subscribe(data => {
        this.listModule = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
