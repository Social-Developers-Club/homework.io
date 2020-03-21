import { MissingTranslationHandler, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { MissingHandlerService } from './missing-translations-handler';
import { TranslationLoaderService } from './services/translation-loader.service';

export const config: TranslateModuleConfig = {

  loader: {
    provide: TranslateLoader,
    useClass: TranslationLoaderService
  },

  missingTranslationHandler: {
    provide: MissingTranslationHandler,
    useClass: MissingHandlerService
  },

  useDefaultLang: false
};
