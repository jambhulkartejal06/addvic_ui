import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentattendaceService {

  constructor(private httpclient:HttpClient) { }

  studentAttendance(formData):Observable<any> {
  console.log("empData=====>",formData);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/student/attendance',formData); 
  }
  // getStudentBatches():Observable<any> {
  // return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/student/getbatchstudents');
  // }
  getComments():Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/student/comment');
  }

  //get attendence list by course_id and batch_id
  getStudentAttendance(course_id,batch_id):Observable<any>{
  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/student/getattendancedetails/${course_id}/${batch_id}`)
  }

  //get list through batch
  // getbyBatch(batch_id):Observable<any>{ 
  // console.log("servicebatch======>",batch_id);
  // return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getbybatch/${batch_id}`)
  // }

  // get student list through course and batch
  getListByBatchAndCourse(course_id,batch_id):Observable<any>{
    console.log("coursebatch=====>",course_id,batch_id);
  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getbycoursebatch/${course_id}/${batch_id}`)
  }


}





