import { TestBed } from '@angular/core/testing';

import { HeladoService } from './helado.service';

describe('HeladoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeladoService = TestBed.get(HeladoService);
    expect(service).toBeTruthy();
  });
});
