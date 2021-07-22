import { TestBed } from '@angular/core/testing';

import { NomadsService } from './nomads.service';

describe('NomadsService', () => {
  let service: NomadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
