import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { HomeworkTranslateModule } from '../shared/translate/translate.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { HomeworkService } from '../homework/services/homework.service';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HomeworkTranslateModule,
    TranslateModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HomeworkService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.hasCoreModuleAlreadyBeenCreated(parentModule);
  }

  hasCoreModuleAlreadyBeenCreated(parentModule): void {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}