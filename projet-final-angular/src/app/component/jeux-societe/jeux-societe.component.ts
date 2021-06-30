import { Utilisateur } from './../../model/utilisateur';
import { TypeJeuxSociete } from './../../enum/type-jeux-societe';
import { JeuxSocieteService } from './../../services/jeux-societe.service';
import { JeuxSociete } from './../../model/jeux-societe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditAvisComponent } from '../edit-avis/edit-avis.component';
import { SupportJeuxSociete } from 'src/app/enum/support-jeux-societe';

@Component({
  selector: 'app-jeux-societe',
  templateUrl: './jeux-societe.component.html',
  styleUrls: ['./jeux-societe.component.css'],
})
export class JeuxSocieteComponent implements OnInit {
  /* js1: JeuxSociete = new JeuxSociete(
    111,
    'Dobble',
    'Asmodee',
    10.5,
    new Date(2010),
    6,
    'Jeu de cartes et de rapidité avec des symboles',
    2,
    8,
    4,
    [new EditAvisComponent()],
    [TypeJeuxSociete.Adresse],
    '10 min',
    [SupportJeuxSociete.Cartes]
  ); */

  constructor(
    private jeuxSocieteService: JeuxSocieteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
