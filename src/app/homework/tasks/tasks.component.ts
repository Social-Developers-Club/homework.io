import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

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
    private readonly homeworkService: HomeworkService,
    readonly toastrService: ToastrService,
    private readonly translateService: TranslateService
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
      this.toastrService.success(this.translateService.instant('messages.uploadSuccess'));
    }, error => {
      this.toastrService.error(this.translateService.instant('messages.uploadFail'));
    });

    this.homeworkService.createTask(
      environment.schoolClassId,
      environment.subjectId,
      this.description
    ).subscribe(data => {
      this.toastrService.success(this.translateService.instant('messages.taskCreationSuccess'));
    }, error => {
      this.toastrService.error(this.translateService.instant('messages.taskCreationFail'));
    });
  }
}
