import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService extends TranslateHttpLoader {

  constructor(http: HttpClient) {
    super(http, 'assets/i18n/', '.json');
  }
}
