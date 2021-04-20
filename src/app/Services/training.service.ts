import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpclient:HttpClient) { }
  createTraining(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/mechanical/service',addData);
     
  }
  getAllTraining(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/get/trainers');
  }
  deleteEnrollment(id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/enrollmentinterest/${id}`);
  }

  createItTraining(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/ittraining',addData); 
  }
  getAllItTraining(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/get/ittrainers');
  }
  deleteItEnrollment(id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/itenrollmentinterest/${id}`);
  }
  }


