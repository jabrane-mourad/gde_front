import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-absences-etudiant',
  templateUrl: './absences-etudiant.component.html',
  styleUrls: ['./absences-etudiant.component.css']
})
export class AbsencesEtudiantComponent implements OnInit {

  apiabsences = 'http://localhost:8080/etudiants/absences?';
  api = '';
  niveau = '';
  codeMasar = '';
  public listabsences: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.niveau = this.tokenStorage.getUser().utilisateur.niveau;
      this.codeMasar = this.tokenStorage.getUser().utilisateur.codeMasar;
    }
    this.getabsences();
  }

  public getabsences(): void {

    this.api = this.apiabsences + 'codeMasar=' + this.codeMasar + '&niveau=' + this.niveau;
    this.http.get(this.api).subscribe(data => {
        this.listabsences = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
