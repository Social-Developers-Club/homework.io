import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class MissingHandlerService implements MissingTranslationHandler {
  done = {};

  handle(params: MissingTranslationHandlerParams): string {

    const token = ['i18n', params.translateService.store.currentLang, params.key].join('/');

    this.done[token] = this.done[token] || 0;
    this.done[token]++;

    if (this.done[token] === 1) {
      console.warn('Missing translation for', token);
    }

    return '[' + token + ']';
  }
}
