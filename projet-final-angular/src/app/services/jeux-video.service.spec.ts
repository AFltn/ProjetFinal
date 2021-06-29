import { TestBed } from '@angular/core/testing';

import { JeuxVideoService } from './jeux-video.service';

describe('JeuxVideoService', () => {
  let service: JeuxVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuxVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
