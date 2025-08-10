import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protegerInicioSesionGuard } from './proteger-inicio-sesion.guard';

describe('protegerInicioSesionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protegerInicioSesionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
