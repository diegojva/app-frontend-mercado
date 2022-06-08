import { TestBed } from '@angular/core/testing';

import { FirstVigilanteGuard } from './first-vigilante.guard';

describe('FirstVigilanteGuard', () => {
  let guard: FirstVigilanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstVigilanteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
