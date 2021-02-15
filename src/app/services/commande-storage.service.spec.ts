import { TestBed } from '@angular/core/testing';

import { CommandeStorageService } from './commande-storage.service';

describe('CommandeStorageService', () => {
  let service: CommandeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
