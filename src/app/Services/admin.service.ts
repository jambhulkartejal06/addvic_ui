import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Model/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient: HttpClient) {}

  
  createCertificateForm(formData): Observable<any> {
    console.log("certificate====>",formData)
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/create/certificate',formData);
  }

  getCertificateForm(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/certificates');
  }
  getByCertificateVerificationNumber(certificateNumber): Observable<any> {
    return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/certificate/verification/${certificateNumber}`);
  }
//   adminGenerateStudent(studentData):Observable<any> {
//     return this.httpclient.post('http://localhost:8080/auth/signup', studentData);
// }
// adminGenerateFaculty(empData):Observable<any> {
//   return this.httpclient.post('http://localhost:8080', empData);
// }
deleteCertificate(certificateNumber){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/certification/${certificateNumber}`);
}
createAdmin(adminData): Observable<any> {
  // localStorage.setItem('studData',studData);
  console.log("adminData=====>",adminData);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/admin/signup',adminData);
}

}