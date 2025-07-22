import { TestBed } from '@angular/core/testing';

import { CategoryServiceTsService } from './admin-service/category-service.ts.service';

describe('CategoryServiceTsService', () => {
  let service: CategoryServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
