import { TestBed } from '@angular/core/testing';

import { PokemonesDataService } from './pokemones-data.service';

describe('PokemonesDataService', () => {
  let service: PokemonesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
