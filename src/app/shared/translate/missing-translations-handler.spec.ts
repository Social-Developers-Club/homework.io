import { TestBed } from '@angular/core/testing';
import { MissingTranslationHandlerParams, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MissingHandlerService } from './missing-translations-handler';

describe('MissingHandlerService', () => {
  let service: MissingHandlerService;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        providers: [MissingHandlerService]
      });
    service = TestBed.inject(MissingHandlerService);
  });

  it('should report', () => {
    const store = new TranslateStore();
    const translateService = new TranslateService(store, null, null, null, null, false, false, false, null);
    const key = 'key';
    const params: MissingTranslationHandlerParams = { translateService, key };
    const token = 'i18n/currentLang/key';
    store.currentLang = 'currentLang';
    spyOn(console, 'warn');

    const issue1 = service.handle(params);
    const issue2 = service.handle(params);

    expect(issue1).toEqual('[' + token + ']');
    expect(issue2).toEqual(issue1);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith('Missing translation for', token);
  });
});
