import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

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
      console.log('data received', data);
      this.toastrService.success(this.translateService.instant('messages.resultSuccess'));
    }, error => {
      this.toastrService.error(this.translateService.instant('messages.resultFailed'));
    });

  }
}