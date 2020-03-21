import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkComponent } from './homework.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClassesComponent } from './classes/classes.component';
import { TasksComponent } from './tasks/tasks.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    HomeworkComponent,
    ClassesComponent,
    TasksComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    TranslateModule
  ],
  exports: [
    HomeworkComponent,
    ClassesComponent,
    TasksComponent,
    CoursesComponent
  ]
})
export class HomeworkModule { }
