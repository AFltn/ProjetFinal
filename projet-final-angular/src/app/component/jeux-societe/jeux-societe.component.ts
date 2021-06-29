import { JeuxSocieteService } from './../../services/jeux-societe.service';
import { JeuxSociete } from './../../model/jeux-societe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jeux-societe',
  templateUrl: './jeux-societe.component.html',
  styleUrls: ['./jeux-societe.component.css'],
})
export class JeuxSocieteComponent implements OnInit {
  //jeuxSociete: JeuxSociete = new JeuxSociete();

  constructor(
    private jeuxSocieteService: JeuxSocieteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
