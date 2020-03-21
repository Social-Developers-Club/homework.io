import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  mockarry = [
    'math',
    'english',
    'german',
    'bio',
    'chemistry'
  ]
  constructor(
    private route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(key => {
      const id = key.paramKey;
    });
  }

  selectCourse(course: string){
    // call service
    this.router.navigate(['/classes']);
  }

}
