import { JeuxVideoService } from './jeux-video.service';
import { JeuxVideo } from './../model/jeux-video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public static URL = 'http://localhost:8080/boot/api/Panier';
  private httpHeader: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  private initHeader() {
    const auth = localStorage.getItem('auth');
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth ? auth : '',
    });
  }
}
