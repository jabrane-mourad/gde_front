import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-emplois-etudiant',
  templateUrl: './emplois-etudiant.component.html',
  styleUrls: ['./emplois-etudiant.component.css']
})
export class EmploisEtudiantComponent implements OnInit {

  api = 'http://localhost:8080/etudiants/emplois?';
  apiEmploi = '';
  semestre = 's1';
  niveau = '';
  filiere = '';
  emploi = '';
  emplois: SafeResourceUrl = '';

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

    this.apiEmploi = this.api + 'semestre=' + this.semestre + '&niveau=' + this.niveau + '&filiere=' + this.filiere;
    this.http.get(this.apiEmploi).subscribe(data => {
        // @ts-ignore
        this.emploi = data.emploi.replace('view?usp=sharing', 'preview');
        this.emplois = this.sanitizer.bypassSecurityTrustResourceUrl(this.emploi);
        console.log(this.emploi);
      }, error => {
        console.log(error);
      }
    );
  }
}
