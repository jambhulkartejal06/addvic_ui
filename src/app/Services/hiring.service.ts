import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  authKey: string | string[];

  constructor(private httpclient:HttpClient) { }
  createHiring(formData): Observable<any> {
      return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/hiring',formData);
    }
    getAllHiring():Observable<any> {
      return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/forms');
    }
    deleteHiring(hiring_id){
      return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/employmentform/${hiring_id}`);
    }
    // downloadFile(fileName):Observable<any> {
    //   return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/resume/${fileName}`);  
    // }
    
// getPdf(filename):Observable<any> 
// {
//   const httpOptions = {
//     responseType: 'blob' as 'json',
    // headers: new HttpHeaders({
    //   'Authorization': this.authKey,
    // })
//   }
  }

