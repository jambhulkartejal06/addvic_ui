import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostPayload } from '../Model/PostPayload';
import { AddPostService } from '../Services/add-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  isEditMode:boolean = false;
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  content = new FormControl('');
  username = new FormControl('')

  constructor(private addpostService: AddPostService, private router: Router,private route: ActivatedRoute,private toastr: ToastrService) {
    this.addPostForm = new FormGroup({
      title: this.title,
     content:this.content,
      username:this.username

    });
    this.postPayload = {
      id: '',
      title: '',
      content: '',
      createdOn: '',
      username: ''
      
    }
  }

  ngOnInit() {
    this.isEditMode=this.addpostService.getEditMode();
    console.log("isedit==>",this.isEditMode);
    console.log(this.route.snapshot.params.id);
      this.addpostService.getCurrentPostData(this.route.snapshot.params.id).subscribe((result)=>{
       this.addPostForm=  new FormGroup({ 
      title: new FormControl(result['title']),
     content: new FormControl(result['content']),
      username: new FormControl(result['username']),

    })
  });
  }

  addPostBlog() {
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.content = this.addPostForm.get('content').value;
    this.postPayload.username = this.addPostForm.get('username').value;
    this.addpostService.addPost(this.postPayload).subscribe(res => {
      console.log("response====>",res)
      this.router.navigateByUrl('/get/posts');
    }); 
    this.toastr.success('Blog Created Successfully !!!!!', 'Toastr fun!', {
      timeOut: 1000
    });
    
  }
  updatePost(){
    this.addpostService.updatePost(this.route.snapshot.params.id,this.addPostForm.value).subscribe((result)=>{
    console.log(result);
    this.router.navigateByUrl('/blogs');
    })
    this.toastr.success('Blog Updated Successfully !!!!!', 'Toastr fun!', {
      timeOut: 1000
    });
    }
}

