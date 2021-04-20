import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostPayload } from 'src/app/Model/PostPayload';
import { AddPostService } from 'src/app/Services/add-post.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  ELEMENT_DATA : PostPayload[];
  displayedColumns: string [] = ['title','username','action'];
  
  dataSource = new MatTableDataSource<PostPayload>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  
  
  constructor(private postService:AddPostService,private toastr: ToastrService,private dialogservice: DialogService,public router: Router) { }
  
  ngOnInit(): void {
  this.postService.setEditMode(true);
  this.getPost();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getPost(){
    let res=this.postService.getAllPost();
    res.subscribe(posts=>this.dataSource.data = posts as PostPayload[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(post,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(post,index);
      }
  });
  
    }
    removeData(post,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
      data.splice(index,1)
      console.log("afterdata",data)
      this.postService.deletePost(post.id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       });
    this.dataSource.data=data;
    }
    getDetail(){
      this.router.navigate(["createblog"]);
    
    }
  }
  