import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  isEdit:boolean = false;
  constructor(private httpclient:HttpClient) { }
    createStaff(formData):Observable<any> {
      console.log("empData=====>",formData);
      return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/staff/signup',formData); 
    }
    updateStaff(user_id,data):Subscribable<any> {
        return this.httpclient.put(`https://server.addvic.com:2020/SMS_ADDVIC/api/staff/${user_id}`,data);
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


