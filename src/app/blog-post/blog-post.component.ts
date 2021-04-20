import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPayload } from '../Model/PostPayload';
import { AddPostService } from '../Services/add-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: PostPayload;
  id: Number;
  
  constructor(private router: ActivatedRoute, private postService: AddPostService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.postService.getPost(this.id).subscribe((data:PostPayload) => {
      this.post = data;
    });
  }
}