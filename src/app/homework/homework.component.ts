import { Component, OnInit } from '@angular/core';
import { HomeworkService } from './services/homework.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  constructor(
    private readonly homeworkService: HomeworkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.homeworkService.getAllSubjects().subscribe(element => {
      console.log('subjects', element);
    });

    this.route.params.subscribe(key => {
      const id = key.paramKey;
    });

    /* this.homeworkService.getAllTeachers().subscribe(element => {
      console.log('classes:', element);
    }); */
  }

}
