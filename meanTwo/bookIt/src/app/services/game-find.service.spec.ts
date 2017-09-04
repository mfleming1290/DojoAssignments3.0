import { TestBed, inject } from '@angular/core/testing';

import { GameFindService } from './game-find.service';

describe('GameFindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameFindService]
    });
  });

  it('should be created', inject([GameFindService], (service: GameFindService) => {
    expect(service).toBeTruthy();
  }));
});
