import { TestBed } from '@angular/core/testing';

import { InmobiliariaService } from './inmobiliaria.service';

describe('InmobiliariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InmobiliariaService = TestBed.get(InmobiliariaService);
    expect(service).toBeTruthy();
  });
});
