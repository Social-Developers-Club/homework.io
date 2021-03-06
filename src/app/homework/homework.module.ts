import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkComponent } from './homework.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClassesComponent } from './classes/classes.component';
import { TasksComponent } from './tasks/tasks.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    HomeworkComponent,
    ClassesComponent,
    TasksComponent,
    CoursesComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    TranslateModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    HomeworkComponent,
    ClassesComponent,
    TasksComponent,
    CoursesComponent,
    ResultComponent
  ]
})
export class HomeworkModule { }
