import { JeuxSocieteService } from './../../services/jeux-societe.service';
import { JeuxSociete } from './../../model/jeux-societe';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jeux-societe-details',
  templateUrl: './jeux-societe-details.component.html',
  styleUrls: ['./jeux-societe-details.component.css'],
})
export class JeuxSocieteDetailsComponent implements OnInit {
  jeuSociete: Observable<JeuxSociete> | any = null;

  constructor(
    private jeuxSocieteService: JeuxSocieteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.jeuSociete = this.jeuxSocieteService
          .get(params.id)
          .subscribe((data) => {
            this.jeuSociete = data;
          });
      }
    });
  }

  nombreAvis(): number {
    let cpt: number = 0;
    this.jeuSociete.avis.forEach((a: any) => {
      console.log(a);
      cpt = cpt + 1;
    });
    return cpt;
  }
  noteMoyenne(): number {
    let cpt: number = 0;
    let cpt2: number = 0;
    this.jeuSociete.avis.forEach((a: any) => {
      cpt2 = cpt2 + a.note;
      cpt = cpt + 1;
    });
    this.jeuSociete.noteMoyenne = cpt2 / cpt;
    return Math.round(this.jeuSociete.noteMoyenne);
  }

  note(i: number) {
    return new Array(Math.round(i));
  }
}
