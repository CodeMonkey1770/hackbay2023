import { TestBed } from '@angular/core/testing';

import { NgWebApisSpeechService } from './ng-web-apis-speech.service';

describe('NgWebApisSpeechService', () => {
  let service: NgWebApisSpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWebApisSpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
