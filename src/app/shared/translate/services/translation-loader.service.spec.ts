import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationLoaderService } from './translation-loader.service';

describe('Loader', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: TranslationLoaderService = TestBed.inject(TranslationLoaderService);
    expect(service).toBeTruthy();
  });
});
