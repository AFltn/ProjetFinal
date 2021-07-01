import { JeuxSocieteService } from './../services/jeux-societe.service';
import { JeuxSociete } from './../model/jeux-societe';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-jeu-societe',
  templateUrl: './home-jeu-societe.component.html',
  styleUrls: ['./home-jeu-societe.component.css'],
})
export class HomeJeuSocieteComponent implements OnInit {
  jeuxSocietes: Observable<JeuxSociete[]> | any = null;

  constructor(private jeuxSocieteService: JeuxSocieteService) {}

  ngOnInit(): void {
    this.jeuxSocietes = this.jeuxSocieteService.getAll();
  }

  noteMoyenne(jeuSociete: JeuxSociete): number {
    let cpt: number = 0;
    let cpt2: number = 0;
    jeuSociete.avis.forEach((a: any) => {
      cpt2 = cpt2 + a.note;
      cpt = cpt + 1;
    });
    jeuSociete.noteMoyenne = cpt2 / cpt;
    return Math.round(jeuSociete.noteMoyenne);
  }
}
