import { TestBed } from '@angular/core/testing';

import { InterceptorReponseRequestService } from './interceptor-reponse-request.service';

describe('InterceptorReponseRequestService', () => {
  let service: InterceptorReponseRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorReponseRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
