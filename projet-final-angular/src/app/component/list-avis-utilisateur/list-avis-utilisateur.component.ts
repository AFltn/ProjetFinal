import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-avis-utilisateur',
  templateUrl: './list-avis-utilisateur.component.html',
  styleUrls: ['./list-avis-utilisateur.component.css'],
})
export class ListAvisUtilisateurComponent implements OnInit {
  client: Observable<Client> | any = null;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initClient();
  }

  initClient() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.clientService.getWithAvis(params.id).subscribe((data) => {
          this.client = data;
        });
      }
    });
  }

  delete(id: number) {
    this.clientService.delete(id).subscribe((result) => {
      this.initClient();
    });
  }
}
