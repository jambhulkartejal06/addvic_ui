import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { PostPayload } from '../Model/PostPayload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  isAdd:boolean = false;

  constructor(private httpclient: HttpClient) { }
  addPost(postPayload: PostPayload){
  console.log("payload====>",postPayload);
  return this.httpclient.post('http://server.addvic.com:2020/SMS_ADDVIC/api/createblog',postPayload);
  }
  getAllPost(): Observable<any> {
  return this.httpclient.get('https://server.addvic.com:2020/SMS_ADDVIC/api/blogs');
  }
  getPost(id): Observable<any> {
  return this.httpclient.get<PostPayload>(`https://server.addvic.com:2020/SMS_ADDVIC/api/getpost/${id}`);
  }
  deletePost(id) {
  return this.httpclient.delete(`https://server.addvic.com:2020/SMS_ADDVIC/api/deleteblog/${id}`);
  }
  getCurrentPostData(id):Observable<any> {
    return this.httpclient.get(`https://server.addvic.com:2020/SMS_ADDVIC/api/getpost/${id}`);
  }
  updatePost(id,data):Subscribable<any> {
    return this.httpclient.put(`https://server.addvic.com:2020/SMS_ADDVIC/api/updateblog/${id}`,data);
  }
  setEditMode(updateData:boolean){
    this.isAdd = updateData;
  }
  getEditMode(){
    return this.isAdd;
  }
  }
