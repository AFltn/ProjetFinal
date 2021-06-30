import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private static URL = 'http://localhost:8080/boot/api/produit';
  private httpHeader: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  private initHeader() {
    const auth = localStorage.getItem('auth');
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth ? auth : '',
    });
  }

  public getAll(): Observable<Client[]> {
    this.initHeader();
    return this.http.get<Client[]>(ClientService.URL, {
      headers: this.httpHeader,
    });
  }

  public delete(id: number): Observable<void> {
    this.initHeader();
    return this.http.delete<void>(ClientService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public get(id: number): Observable<Client> {
    this.initHeader();
    return this.http.get<Client>(ClientService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public getWithAvis(id: number): Observable<Client> {
    this.initHeader();
    return this.http.get<Client>(ClientService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public create(client: Client): Observable<Client> {
    this.initHeader();
    const clientFormate = {
      prenom: client.prenom,
      nom: client.nom,
      dateNaissance: client.dateNaissance,
      tel: client.tel,
      adresse: {
        numero: client.adresse.numero,
        rue: client.adresse.rue,
        codePostal: client.adresse.codePostal,
        ville: client.adresse.ville,
      },
    };

    return this.http.post<Client>(ClientService.URL, clientFormate, {
      headers: this.httpHeader,
    });
  }

  public update(client: Client): Observable<Client> {
    this.initHeader();
    console.log(client);
    return this.http.put<Client>(ClientService.URL + '/' + client.id, client, {
      headers: this.httpHeader,
    });
  }
}
