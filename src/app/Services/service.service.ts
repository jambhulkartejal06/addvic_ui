import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }
   addService(serviceData): Observable<any> {
    console.log("serviceData=====>",serviceData);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/service',serviceData);
  }
  getAllService():Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/services');
  }
  
   }



