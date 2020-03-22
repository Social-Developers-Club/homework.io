import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  model: NgbDateStruct;

  constructor(
    private readonly homeworkService: HomeworkService
  ) { }

  ngOnInit(): void {
  }

  createTask(description: string) {
    this.homeworkService.createTask();
  }

  /* 
  Description: string

  school_class_id: number

  subject_id: number

  file_path: string

  start_event :datetime
  end_event :datetime
   */
}
