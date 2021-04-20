import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
 

  constructor(private httpclient:HttpClient) { }
  createContact(addData): Observable<any> {
    
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/feedback',addData);
  }
  getAllContact():Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/feedbacks');
}
deleteContact(contact_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/contactus/${contact_id}`);
}

}