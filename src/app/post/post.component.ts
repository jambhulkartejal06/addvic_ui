import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AddPostService } from '../Services/add-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title='Blogs | Blogging';
  responsive = true;
  cols = 1;
   current = 0;
  posts:any=[];
  constructor(private postService:AddPostService,private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Warade'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'It is an online portal for Information Technology and Mechanical Field with news, inventions, and technologies. Its main goal is to provide the knowledge both to students and industry professionals.'}

      
    );
      

    // this.posts = this.postService.getAllPost();
    this.postService.getAllPost().subscribe(res=>{
      this.posts=res;
    })
    console.log("getallpost====>",this.posts);
  }
}






