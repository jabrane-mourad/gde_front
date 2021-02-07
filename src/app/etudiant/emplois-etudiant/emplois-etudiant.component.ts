import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

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
  emplois = '';
  useBrowserLocale = true;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
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
        this.emplois = data.emploi;
      }, error => {
        console.log(error);
      }
    );
  }
}
