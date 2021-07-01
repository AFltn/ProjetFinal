import { JeuxVideo } from './../model/jeux-video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JeuxVideoComponent } from '../component/jeux-video/jeux-video.component';

@Injectable({
  providedIn: 'root',
})
export class JeuxVideoService {
  private static URL = 'http://localhost:8080/boot/api/jeuxVideo';
  private httpHeader: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  private initHeader() {
    const auth = localStorage.getItem('auth');
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth ? auth : '',
    });
  }

  public getAll(): Observable<JeuxVideo[]> {
    this.initHeader();
    return this.http.get<JeuxVideo[]>(JeuxVideoService.URL, {
      headers: this.httpHeader,
    });
  }

  public delete(id: number): Observable<void> {
    this.initHeader();
    return this.http.delete<void>(JeuxVideoService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public get(id: number): Observable<JeuxVideo> {
    this.initHeader();
    return this.http.get<JeuxVideo>(JeuxVideoService.URL + '/' + id, {
      headers: this.httpHeader,
    });
  }

  public create(jeuxvideo: JeuxVideo): Observable<JeuxVideo> {
    this.initHeader();
    const jeuxVideoFormate = {
      nom: jeuxvideo.nom,
      editeur: jeuxvideo.editeur,
      nbJoueursMax: jeuxvideo.nbJoueursMax,
      nbJoueursMin: jeuxvideo.nbJoueursMin,
      dateSortie: jeuxvideo.dateSortie,
      ageMin: jeuxvideo.ageMin,
      description: jeuxvideo.description,
      noteMoyenne: jeuxvideo.noteMoyenne,
      genre: jeuxvideo.genre,
      support: jeuxvideo.support,
      prix: jeuxvideo.prix,
    };

    return this.http.post<JeuxVideo>(JeuxVideoService.URL, jeuxVideoFormate, {
      headers: this.httpHeader,
    });
  }

  public update(jeuxvideo: JeuxVideo): Observable<JeuxVideo> {
    this.initHeader();
    console.log(jeuxvideo);
    return this.http.put<JeuxVideo>(
      JeuxVideoService.URL + '/' + jeuxvideo.id,
      jeuxvideo,
      { headers: this.httpHeader }
    );
  }
}
