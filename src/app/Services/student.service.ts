import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscribable } from 'rxjs';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  isAdd:boolean = false;
  userdata:any = [];
  emailId:string ='';
  constructor(private httpclient:HttpClient) { }
  
  studentGenerateStudent(formData):Observable<any>{
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/student/signupnew',formData)
  }


  // studentGenerateStudent(studentuserdto,imageformData):Observable<any>{
  //   const formData = new FormData();
  //   formData.append("file",imageformData)

    // const body = {studentuserdto,};
    // console.log("studuser=====>",studentuserdto);
    // console.log("studuser=====>",imageformData);

   // let headers = new Headers();
    //headers.append('Content-Type', 'multipart/form-data; boundary=Inflow');
    // headers.set('Accept', 'application/json');
    // const body = {studentuserdto:studentuserdto,...formData};
    // const body = Object.assign(studentuserdto,formData);
  //   console.log("bodydata======>",body);
  //   return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/student/signupnew', JSON.stringify(body),{
  //     headers: new HttpHeaders({"Content-Type": "multipart/form-data"})
  //   });
  // }
  


  // studentGenerateStudent():Observable<any>{zss.
    
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'multipart/form-data;');
  //     headers.set('Accept', 'application/json');
      
  //     return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/student/signupnew'+'studObj',{'headers':headers});
  //   }

studentGenerateFaculty(formData):Observable<any> {
  console.log("empData=====>",formData);

  
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/staff/signup',formData,); 
}
// public getStudent() {
//   return this.httpclient.get('http://52.66.237.227:2020/SMS_ADDVIC/api/auth/student/signup');
// }

getAllData():Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/students');
}


setUserData(userdata){
this.userdata=userdata;
console.log("setdata==>",userdata);
}
getUserData(){
  console.log("hi");
return this.userdata;

}
getBirthday():Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/auth/checkBirthday');
}
updateStudent(student_id,data):Subscribable<any> {
  return this.httpclient.put(`https://server.addvic.com:2020/SMS_ADDVIC/api/updatestudent/${student_id}`,data);
 
}
getCurrentStudData(user_id):Observable<any> {
  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/auth/student/${user_id}`);
}
setEditMode(updateData:boolean,emailid?:string){
  this.isAdd = updateData;
  this.emailId = emailid;
}
getEditMode(){
  return this.isAdd ;


}
getemailId(){
  return this.emailId;

}
}

