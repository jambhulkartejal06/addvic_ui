import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateemailService {

  constructor(private httpclient:HttpClient) {}
    emailVerify(emailData): Observable<any> {
      console.log("email=====>",emailData);
      return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/generateStudentEmailOtp?email='+emailData,null);
    
   }
verifyOtp(emailData,newOtp):Observable<any>{
  console.log("otpnum=====>",emailData,newOtp);
return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/validateOtp?email='+emailData+'&otpnum='+newOtp,null);
}
staffCounsellorVerify(emailData): Observable<any> {
  console.log("email=====>",emailData);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/generateStaffEmailOtp?email='+emailData,null);    
}


}

