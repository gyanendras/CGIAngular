import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('authenicate return false on incorrect credentials', () => {
    expect(service.authenticate("user1","pwd")==false);
  });

  it('authenicate return ture on correct credentials', () => {
    expect(service.authenticate("user1","pwd1")==true);
  });
});
