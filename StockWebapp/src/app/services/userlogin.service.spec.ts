/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserloginService } from './userlogin.service';

describe('Service: Userlogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserloginService]
    });
  });

  it('should ...', inject([UserloginService], (service: UserloginService) => {
    expect(service).toBeTruthy();
  }));
});
