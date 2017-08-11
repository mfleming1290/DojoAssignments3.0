import { TestBed, inject } from '@angular/core/testing';

import { BookFindService } from './book-find.service';

describe('BookFindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookFindService]
    });
  });

  it('should be created', inject([BookFindService], (service: BookFindService) => {
    expect(service).toBeTruthy();
  }));
});
