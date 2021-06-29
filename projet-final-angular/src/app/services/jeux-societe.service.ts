import { JeuxSociete } from './../model/jeux-societe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JeuxSocieteService {
  private static URL = 'http://localhost:8080/boot/api/jeuxSociete';
  private httpHeader: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  private initHeader() {
    const auth = localStorage.getItem('auth');
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth ? auth : '',
    });
  }

  public getAll(): Observable<JeuxSociete[]> {
    this.initHeader();
    return this.http.get<JeuxSociete[]>(JeuxSocieteService.URL, {
      headers: this.httpHeader,
    });
  }

  public delete(id: number): Observable<void> {
    this.initHeader();
    return this.http.delete<void>(JeuxSocieteService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public get(id: number): Observable<JeuxSociete> {
    this.initHeader();
    return this.http.get<JeuxSociete>(JeuxSocieteService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public create(jeuxsociete: JeuxSociete): Observable<JeuxSociete> {
    this.initHeader();
    const jeuxSocieteFormate = {
      nom: jeuxsociete.nom,
      prix: jeuxsociete.prix,
    };

    return this.http.post<JeuxSociete>(
      JeuxSocieteService.URL,
      jeuxSocieteFormate,
      {
        headers: this.httpHeader,
      }
    );
  }

  public update(jeuxsociete: JeuxSociete): Observable<JeuxSociete> {
    this.initHeader();
    console.log(jeuxsociete);
    return this.http.put<JeuxSociete>(
      JeuxSocieteService.URL + '/' + jeuxsociete.id,
      jeuxsociete,
      { headers: this.httpHeader }
    );
  }
}
