import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}