import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {


  constructor(private httpclient:HttpClient) { }

  addBatchesName(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/batch/create',addData);

  }
  getStudentBatches(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/batches');
  }
  
deleteBatch(batch_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/batch/${batch_id}`);
}
}