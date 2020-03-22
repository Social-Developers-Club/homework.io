import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Time } from '@angular/common';

@Injectable()
export class HomeworkService {

    constructor(private readonly http: HttpClient) {
    }

    getAllClasses() {
        return this.http.get(`${environment.apiurl}/school_classes`, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    };

    getAllStudents() {
        return this.http.get(`${environment.apiurl}/students`, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    };

    getAllSchools() {
        return this.http.get(`${environment.apiurl}/schools`, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    };

    getAllTeachers() {
        return this.http.get(`${environment.apiurl}/teachers`, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    };

    getAllSubjects() {
        return this.http.get(`${environment.apiurl}/subjects`, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    }


    uploadFile(fileToUpload: File) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post(`${environment.apiurl}/file-upload`, formData, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
        });
    }


    createTask(subject_id: number, school_class_id: number, description: string) {
        let start_event = null;
        let end_event = null;
        let file_path = 'Ingo';
        let teacher_id = 0;
        return this.http.post(`${environment.apiurl}/homeworks`, { subject_id, description, school_class_id, end_event, start_event, file_path, teacher_id }, {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json, text/plain')
        });
    }
}
