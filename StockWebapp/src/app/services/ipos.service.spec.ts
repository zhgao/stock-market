/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IposService } from './ipos.service';

describe('Service: Ipos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IposService]
    });
  });

  it('should ...', inject([IposService], (service: IposService) => {
    expect(service).toBeTruthy();
  }));
});
