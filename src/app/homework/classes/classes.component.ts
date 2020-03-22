import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworkService } from '../services/homework.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classArray: [];

  constructor(
    private readonly router: Router,
    private readonly homeworkService: HomeworkService) {
  }

  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses() {
    this.homeworkService.getAllClasses().subscribe((element: any) => {
      this.classArray = element;
    })
  }

  selectClass(classString: any){
    environment.schoolClassId = classString.id;
  }

}
