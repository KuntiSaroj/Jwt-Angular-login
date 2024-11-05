import { TestBed } from '@angular/core/testing';

import { HardCodeAuthenticationService } from './hard-code-authentication.service';

describe('HardCodeAuthenticationService', () => {
  let service: HardCodeAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodeAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
