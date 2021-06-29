import { ClientService } from './../../services/client.service';
import { Client } from './../../model/client';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css'],
})
export class ProfilClientComponent implements OnInit {
  client: Observable<Client> | any = null;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.initClient();
  }

  initClient() {
    this.client = this.clientService.get(this.client.id);
  }
}
