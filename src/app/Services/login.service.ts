import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  private email: BehaviorSubject<any> = new BehaviorSubject(null);

  getEmail(): Observable<any> {
      return this.email.asObservable();
  }

  setEmail(setEmail) {
      this.email.next(setEmail);
  }
  studentLoginCheck(studData): Observable<any> {
    // localStorage.setItem('studData',studData);
    console.log("studData=====>",studData);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/student/login',studData);
  }
  adminLoginCheck(adminData): Observable<any> {
    localStorage.setItem('adminData',adminData);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/admin/login',adminData);
  }
  staffCounsellorLoginCheck(userData): Observable<any> {
    localStorage.setItem('adminData',userData);
    console.log("staff====>",userData)
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/user/login',userData);
  } 
  logoutStaff(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/user/logout');
  }
  staffLoginCheck(userData): Observable<any> {9
    localStorage.setItem('adminData',userData);
    console.log("staff====>",userData)
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/user/login',userData);
  }
  sendOtp(emailData): Observable<any> {
  console.log("email=====>",emailData);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/generateOtp?email='+emailData,null);
}

  verifyOtp(emailData,newOtp):Observable<any>{
    console.log("otpnum=====>",newOtp,emailData);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/validateOtp?email='+emailData+'&otpnum='+newOtp,null);
}
  changePassword(emailData,passwordData):Observable<any>{
    console.log("password====>",emailData,passwordData);
    
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/changepassword?email='+emailData+'&password='+passwordData,null);
}
  }


