import { ElementCommande } from './../model/element-commande';
import { LigneCommande } from './../model/ligne-commande';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private static URL = 'http://localhost:8080/boot/api/commande';
  private httpHeader: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  private initHeader() {
    const auth = localStorage.getItem('auth');
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth ? auth : '',
    });
  }

  public getAll(): Observable<Commande[]> {
    this.initHeader();
    return this.http.get<Commande[]>(CommandeService.URL, {
      headers: this.httpHeader,
    });
  }

  public delete(idCommande: number): Observable<void> {
    this.initHeader();
    return this.http.delete<void>(CommandeService.URL + '/' + idCommande, {
      headers: this.httpHeader,
    });
  }

  public get(idCommande: number): Observable<Commande> {
    this.initHeader();
    return this.http.get<Commande>(CommandeService.URL + '/' + idCommande, {
      headers: this.httpHeader,
    });
  }

  public create(commande: ElementCommande): Observable<Commande> {
    this.initHeader();
    const commandeFormate = {
      client: commande.client,
      produit: commande.produit,
      quantite: commande.quantite,
      date: commande.date,
    };

    return this.http.post<Commande>(CommandeService.URL, commandeFormate, {
      headers: this.httpHeader,
    });
  }

  public update(commande: Commande): Observable<Commande> {
    this.initHeader();
    console.log(commande);
    return this.http.put<Commande>(
      CommandeService.URL + '/' + commande.idCommande,
      commande,
      { headers: this.httpHeader }
    );
  }
}
