import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounsellorService {
isEdit:boolean = false;
  constructor(private httpclient:HttpClient) { }
  createCounsellor(formData):Observable<any> {
    console.log("studData=====>",formData);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/permit/counsellor/signup',formData);
  }
  getAllData():Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/users');
  }
  getCurrentData(user_id):Observable<any> {
    return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/staff/${user_id}`);
}
  setEditMode(updateData){
    this.isEdit = updateData;
  }
  getEditMode(){
    return this.isEdit;
  }
}

