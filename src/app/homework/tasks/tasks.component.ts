import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  model: NgbDateStruct;

  fileToUpload: File = null;
  description: string;

  constructor(
    private readonly homeworkService: HomeworkService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  handleTextInput(inputdes: any) {
    this.description = inputdes.target.value;
  }

  uploadFileToActivity() {
    this.homeworkService.createTask(
      this.fileToUpload,
      environment.schoolClassId,
      environment.subjectId,
      this.description
    ).subscribe(data => {
      console.log('data received', data);

    }, error => {
      console.log(error);
    });
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
