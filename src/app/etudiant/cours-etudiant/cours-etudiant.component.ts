import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

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

    this.api = this.apiMoules + 'nom=' + this.semestre + '&niveau=' + this.niveau + '&filiere=' + this.filiere;
    console.log(this.apiMoules);
    this.http.get(this.api).subscribe(data => {
        // @ts-ignore
        this.listModule = data.modules;
        console.log(this.apiMoules);
      }, error => {
        console.log(error);
      }
    );
  }
}
