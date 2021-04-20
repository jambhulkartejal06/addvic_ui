import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private httpclient:HttpClient) { }
  createDesignationName(addData): Observable<any> {
    console.log("designation===>",addData);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/designation',addData);

}
getAllDesignation(): Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/designations');
}
deleteDesignation(designation_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/designation/${designation_id}`);
}
}