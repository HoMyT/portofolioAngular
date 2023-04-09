import { TestBed } from '@angular/core/testing';

import { TableauInfoServiceService } from './tableau-info-service.service';

describe('TableauInfoServiceService', () => {
  let service: TableauInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
