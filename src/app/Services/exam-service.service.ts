import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  isAdd:boolean = false;
  constructor(private httpclient:HttpClient) { }
    createExam(addData): Observable<any> {
      console.log("addData===>",addData);
      return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/exam',addData);
    }
     getExamList(): Observable<any> {
      return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/getexam');
    }
    deleteExam(exam_id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/exam/${exam_id}`);
    }
    getCurrentExamData(exam_id):Observable<any> {
      return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/auth/exam/${exam_id}`);
    }
    updateExam(id,data):Subscribable<any> {
    return this.httpclient.put(`https://server.addvic.com:2020/SMS_ADDVIC/api/update/exam/${id}`,data);
    }
    setEditMode(updateData:boolean){
      this.isAdd = updateData;
    }
    getEditMode(){
      return this.isAdd;
     }
    }

