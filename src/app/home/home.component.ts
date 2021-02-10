import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  semestre = 'S1';
  pdfSrc = '';
  useBrowserLocale = true;
  apiBase = 'http://localhost:8080/emploiInfo';
  apiEmploi = '';
  filiere = 'GL';
  listEmploi: any;
  display = '';

  constructor(private http: HttpClient, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getEmplois();
  }

  getEmplois(): void {
    this.pdfSrc = '';
    this.display = 'none';
    this.apiEmploi = this.apiBase + '?semestre=' + this.semestre + '&filiere=' + this.filiere;
    this.http.get(this.apiEmploi).subscribe(data => {
        // @ts-ignore
        this.listEmploi = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  viewEploi(emploi: any): any {
    this.pdfSrc = emploi;
    this.display = 'block';
  }
}
