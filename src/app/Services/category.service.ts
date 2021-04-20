import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }
  addCategoryName(addcat): Observable<any> {
    console.log("categories===>",addcat);
    return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/category/create',addcat);
}
getCategoryName(): Observable<any> {
  console.log("getcat====>",this.getCategoryName);
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/categories');
}
deleteCategory(cat_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/category/${cat_id}`);
}
// create category for It 
addItCategoryName(addcat): Observable<any> {
  console.log("categories===>",addcat);
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/itcategory/create',addcat);
}
getItCategoryName(): Observable<any> {
  console.log("getcat====>",this.getItCategoryName);
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/itcategories');
}

deleteItCategory(cat_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/itcategory/${cat_id}`);
}
//create category for digital marketing and graphics
createCategoryName(addcat): Observable<any>{
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/create',addcat);
}

getAlldigitalCategory(): Observable<any>{
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/graphic/categories');
}
deleteDigitalCategory(category_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/delete/graphic/${category_id}`);
}
//create category for Internship
createInternshipCategoryName(addcat): Observable<any>{
  return this.httpclient.post('https://server.addvic.com:2020/SMS_ADDVIC/api/internship/category/create',addcat);
}
getInternshipAllCategory(): Observable<any>{
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/internship/categories');
}
deleteInternshipCategory(category_id){
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/internship/delete/${category_id}`);
}
}

