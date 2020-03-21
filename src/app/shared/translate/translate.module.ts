import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { config } from './config';
import { TranslationService } from './services/translation.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    /*
    * Every submodule should import TraslateModule directly to get access to the directives and pipes.
    * Solution with shared modules doesn't work, see open git ussue: https://github.com/ngx-translate/core/issues/883
    */
    TranslateModule.forRoot(config),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (setup: TranslationService) => (() => {
        setup.syncBrowserLang();
        return setup.initBrowserLang();
      }),
      deps: [TranslationService],
      multi: true
    },
  ]
})
export class HomeworkTranslateModule { }
