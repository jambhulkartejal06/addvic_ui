import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpclient:HttpClient) { }
  getAllCourses(): Observable<any> {
    return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/mechanical/allcourses');
  }
  addCourses(addData): Observable<any> {
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/course/create',addData);
  }
  deleteCourses(course_id){
    return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/course/${course_id}`);
  }
//   updateStudent(updateData):Subscribable<any> {
//   return this.httpclient.put('http://localhost:2021/SMS_ADDVIC/api/course/{course_id}',course_id);
// }

courseById(category):Observable<any>{
  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/courses/${category}`);
  }
categorycourseById(cat_id):Observable<any>{
return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getcoursesById/${cat_id}`);
}
    // working
courseByCategory(category){
return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getcoursesByName/${category}`)
    }
getStudentCourses(): Observable<any> {
return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/coursesCategories');
    }
addItCourses(addData): Observable<any>{
return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/itcourse/create',addData);
} 
getAllItCourses(): Observable<any> {
return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/itallcourses');
}
// itCourseById(category):Observable<any>{
//   return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/courses/${category}`);
//   }
updateItCourses(course_id):Subscribable<any> {
return this.httpclient.put('http://server.addvic.com:2020/SMS_ADDVIC/api/course/{course_id}',course_id);
}

itCourseByCategory(category){
return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getitcoursesByName/${category}`)
}

itCategoryCourseById(cat_id):Observable<any>{
return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getcoursesById/${cat_id}`);
}

getItAndMechCoursesList():Observable<any>{
return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/itmechcourses`);
}

// create course for digital marketing & graphic
createDigitalMarketingCourse(addData):Observable<any>{
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/make',addData);
}
getAllCreateDigitalMarktingCourse():Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/allcourses');
}
deleteDigitalMarktingCourses(course_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/${course_id}`);
}
getDigitalMarktingCourseByCategory(category){

  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/getcoursesByName/${category}`)
}
updateDigitalMarkrtingCourse(course_id):Subscribable<any> {
  return this.httpclient.put('http://server.addvic.com:2020/SMS_ADDVIC/api/graphic/{course_id}',course_id);
}


//create course for Internship
createInternshipCourse(addData):Observable<any>{
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/internship/course/create',addData);
}
getAllInternshipCourse():Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/internship/allcourses');
}
deleteInternshipCourses(course_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/internship/course/${course_id}`);
}
getInternshipCourseByCategory(category){
  return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/internship/getcoursesByName/${category}`)
}
updateInternshipCourse(course_id):Subscribable<any> {
  return this.httpclient.put('http://server.addvic.com:2020/SMS_ADDVIC/api/internship/{course_id}',course_id);
}
}


