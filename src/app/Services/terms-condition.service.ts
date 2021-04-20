import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsConditionService {
 emailid:string='';
  constructor(private httpclient:HttpClient) { }
  private email: BehaviorSubject<any> = new BehaviorSubject(null);

  getEmail(){
      // return this.email.asObservable();
      return this.emailid;
  }

  setEmail(setEmail) {
    this.emailid=setEmail
      // this.email.next(setEmail);
  }
  sendOtp(emailData,fullName): Observable<any> {
    console.log("email=====>",emailData);
  
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/terms-conditions?email='+emailData+'&full_name='+fullName,null);
  
  }
    verifyOtp(emailData,newOtp):Observable<any>{
      console.log("otpnum=====>",emailData,newOtp);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/verifyotp?email='+emailData+'&otpnum='+newOtp,null);
  }
}
