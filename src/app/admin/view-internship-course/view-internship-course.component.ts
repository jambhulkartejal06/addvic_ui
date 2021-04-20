import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CourseInternship } from 'src/app/Model/internshipCourse';
import { CourseService } from 'src/app/Services/course.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-internship-course',
  templateUrl: './view-internship-course.component.html',
  styleUrls: ['./view-internship-course.component.css']
})
export class ViewInternshipCourseComponent implements OnInit {

  ELEMENT_DATA : CourseInternship[];
  displayedColumns: string [] = ['course_id','courseName','duration','categories','action'];
  
  dataSource = new MatTableDataSource<CourseInternship>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    constructor(private courseservice:CourseService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.getAllCourses();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllCourses(){
    let res=this.courseservice.getAllInternshipCourse();
    res.subscribe(courses=>this.dataSource.data = courses as CourseInternship[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteE(event, Id) {
    // console.log('delete element==>', event, Id);
    // this.batchservice.deleteDetails(Id).subscribe((req: any) => {
    //   this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
    //     timeOut: 200000
    //   });
    // });
  }
  onDelete(course,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(course,index);
      }
  });
      
  
  
    }
    removeData(course,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.courseservice.deleteInternshipCourses(course.course_id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       
    });
      
    this.dataSource.data=data;
    }
  }
  
  
  
  

