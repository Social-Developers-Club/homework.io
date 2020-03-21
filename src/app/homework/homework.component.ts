import { Component, OnInit } from '@angular/core';
import { HomeworkService } from './services/homework.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  constructor(
    private readonly homeworkService: HomeworkService
  ) { }

  ngOnInit(): void {
    this.homeworkService.getAllTeachers().subscribe(element => {
      console.log('classes:', element);
    });
  }

}
