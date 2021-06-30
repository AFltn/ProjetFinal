import { Observable } from 'rxjs';
import { PlateformeJeuxVideo } from './../../enum/plateforme-jeux-video';
import { TypeJeuxVideo } from './../../enum/type-jeux-video';
import { JeuxVideo } from './../../model/jeux-video';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EditAvisComponent } from '../edit-avis/edit-avis.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  jeuVideo: Observable<JeuxVideo> | any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
