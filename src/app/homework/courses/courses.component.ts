import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from '../services/homework.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  subjectArray: any;

  constructor(
    private readonly homeworkService: HomeworkService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.getCourses();
    this.route.params.subscribe(key => {
      const id = key.paramKey;
    });
  }

  getCourses() {
    this.homeworkService.getAllSubjects().subscribe((element: any) => {
      console.log('element', element);
      this.subjectArray = element;
    },
    (fail) => {
      this.subjectArray = [
        {name: 'Math', id: 0},
        {name: 'English', id: 1}]
    });
  }

  selectCourse(course: any){
    environment.subjectId = course.id;
  }
}
