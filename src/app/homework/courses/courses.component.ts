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

  subjectArray: [];

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
      this.subjectArray = element;
    });
  }

  selectCourse(course: any){
    environment.subjectId = course.id;
  }
}
