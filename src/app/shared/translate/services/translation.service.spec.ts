import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from './translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { HomeworkTranslateModule } from '../translate.module';

describe('TranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HomeworkTranslateModule,
      TranslateModule.forRoot(),
    ]
  }));

  it('should be created', () => {
    const service: TranslationService = TestBed.inject(TranslationService);
    expect(service).toBeTruthy();
  });
});
