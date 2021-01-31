import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-notes-etudiant',
  templateUrl: './notes-etudiant.component.html',
  styleUrls: ['./notes-etudiant.component.css']
})
export class NotesEtudiantComponent implements OnInit {
  apiNotes = 'http://localhost:8080/etudiants/notes?';
  api = '';
  niveau = '';
  codeMasar = '';
  public listNotes: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.niveau = this.tokenStorage.getUser().utilisateur.niveau;
      this.codeMasar = this.tokenStorage.getUser().utilisateur.codeMasar;
    }
    this.getNotes();
  }

  public getNotes(): void {

    this.api = this.apiNotes + 'codeMasar=' + this.codeMasar + '&niveau=' + this.niveau;
    this.http.get(this.api).subscribe(data => {
        // @ts-ignore
        this.listNotes = data;
        console.log(this.apiNotes);
        console.log(this.listNotes);
      }, error => {
        console.log(error);
      }
    );
  }
}
