import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JeuxVideo } from 'src/app/model/jeux-video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jeuxVideos: Observable<JeuxVideo> | any = null;
  constructor() {}

  ngOnInit(): void {}
}
