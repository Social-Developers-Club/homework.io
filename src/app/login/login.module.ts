import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login.routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
