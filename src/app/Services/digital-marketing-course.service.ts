import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitalMarketingCourseService {

  constructor(private httpclient:HttpClient) { }
  createDigitalMarketingTraining(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/intern/service',addData);  
  }
  getAllDigitalMarketingTraining(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/services');
  }
  deleteDigitalMarketingEnrollment(id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/graphicinterest/${id}`);
  }
  updateInternship(id):Subscribable<any> {
    return this.httpclient.put(`http://server.addvic.com:2020/SMS_ADDVIC/api/update/graphic/${id}`,id);
  }
  }