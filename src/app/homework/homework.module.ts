import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkComponent } from './homework.component';


@NgModule({
  declarations: [HomeworkComponent],
  imports: [
    CommonModule,
    HomeworkRoutingModule
  ]
})
export class HomeworkModule { }
