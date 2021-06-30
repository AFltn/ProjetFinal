import { JeuxVideo } from './../../model/jeux-video';
import { PlateformeJeuxVideo } from './../../enum/plateforme-jeux-video';
import { TypeJeuxVideo } from './../../enum/type-jeux-video';
import { EditAvisComponent } from './../edit-avis/edit-avis.component';
import { ActivatedRoute, Router } from '@angular/router';
import { JeuxVideoService } from './../../services/jeux-video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux-video',
  templateUrl: './jeux-video.component.html',
  styleUrls: ['./jeux-video.component.css'],
})
export class JeuxVideoComponent implements OnInit {
  /* jv1: JeuxVideo = new JeuxVideo(
    777,
    'Mario Kart8',
    'Nintendo',
    49.99,
    new Date(2020),
    3,
    'Jeu de course de voitures avec des personnages de l univers de Mario',
    1,
    12,
    4.2,
    [new EditAvisComponent()],
    [TypeJeuxVideo.course],
    [PlateformeJeuxVideo.SWITCH]
  ); */

  constructor(
    private jeuxVideoService: JeuxVideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
