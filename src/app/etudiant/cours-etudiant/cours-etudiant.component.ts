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
  api = '';
  semestre = 's1';
  niveau = '';
  filiere = '';
  public listModule: any;
  pdfSrc = '';
  useBrowserLocale = true;
  displayCours = 'none';

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
    console.log(this.api);
    this.http.get(this.api).subscribe(data => {
        // @ts-ignore
        this.listModule = data.modules;
      }, error => {
        console.log(error);
      }
    );
  }

  viewCours(url: string): void {
    this.displayCours = 'block';
    this.pdfSrc = url;
  }
}
