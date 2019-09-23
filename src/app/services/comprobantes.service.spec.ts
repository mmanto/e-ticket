import { TestBed } from '@angular/core/testing';

import { ComprobantesService } from './comprobantes.service';

describe('ComprobantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprobantesService = TestBed.get(ComprobantesService);
    expect(service).toBeTruthy();
  });
});
