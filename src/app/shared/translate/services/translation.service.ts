import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  private readonly LANGS = environment.languages;

  constructor(
    private readonly translate: TranslateService
  ) { }

  initBrowserLang(): Promise<any> {
    let lang = this.translate.getBrowserLang();
    lang = this.LANGS.indexOf(lang) < 0 ? this.LANGS[1] : lang;
    this.translate.setDefaultLang(lang);
    this.LANGS.forEach(LANG => this.translate.reloadLang(LANG));
    return this.translate.use(lang).toPromise();
  }

  syncBrowserLang(): void {
    this.translate.onLangChange.subscribe((change: LangChangeEvent) => {
      const elements = document.querySelectorAll('[lang]');
      Array
        .from(elements)
        .forEach((element) => element.setAttribute('lang', change.lang));
    });
  }
}
