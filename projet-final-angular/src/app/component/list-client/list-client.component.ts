import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  client: Observable<Client> | any = null;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.initClient();
  }

  initClient() {
    this.client = this.clientService.getAll();
  }

  delete(id: number) {
    this.clientService.delete(id).subscribe((result) => {
      this.initClient();
    });
  }
}
