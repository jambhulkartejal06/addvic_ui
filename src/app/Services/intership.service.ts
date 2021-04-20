import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntershipService {
  constructor(private httpclient:HttpClient) { }
  createInternshipTraining(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/intern/service',addData);  
  }
  getAllInternshipTraining(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/intern/get/trainers');
  }
  deleteInternshipEnrollment(id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/intern/${id}`);
  }
  updateInternship(id):Subscribable<any> {
    return this.httpclient.put(`http://server.addvic.com:2020/SMS_ADDVIC/api/update/intern/${id}`,id);
  }
  }
