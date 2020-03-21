import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './homework.component';
import { ClassesComponent } from './classes/classes.component';
import { CoursesComponent } from './courses/courses.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: 'homework', component: HomeworkComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeworkRoutingModule { }
