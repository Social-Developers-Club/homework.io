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
    this.homeworkService.uploadFile(
      this.fileToUpload
    ).subscribe(data => {
      console.log('data received', data);

    }, error => {
      console.log(error);
    });


    this.homeworkService.createTask(
      environment.schoolClassId,
      environment.subjectId,
      this.description
    ).subscribe(data => {
      console.log('data received', data);

    }, error => {
      console.log(error);
    });
  }
}
