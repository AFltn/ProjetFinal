import { TestBed } from '@angular/core/testing';

import { JeuxSocieteService } from './jeux-societe.service';

describe('JeuxSocieteService', () => {
  let service: JeuxSocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuxSocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
