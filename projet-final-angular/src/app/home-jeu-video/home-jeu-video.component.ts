import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JeuxVideo } from '../model/jeux-video';
import { JeuxVideoService } from '../services/jeux-video.service';

@Component({
  selector: 'app-home-jeu-video',
  templateUrl: './home-jeu-video.component.html',
  styleUrls: ['./home-jeu-video.component.css'],
})
export class HomeJeuVideoComponent implements OnInit {
  jeuxVideos: Observable<JeuxVideo[]> | any = null;

  constructor(private jeuxVideoService: JeuxVideoService) {}

  ngOnInit(): void {
    this.jeuxVideos = this.jeuxVideoService.getAll();
  }
}
