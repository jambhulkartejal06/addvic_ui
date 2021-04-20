import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Attendance } from 'src/app/Model/attendance';
import { BatchPojo } from 'src/app/Model/batchPojo';
import { Course } from 'src/app/Model/course';
import { Student } from 'src/app/Model/student';
import { BatchService } from 'src/app/Services/batch.service';
import { CourseService } from 'src/app/Services/course.service';
import { StudentattendaceService } from 'src/app/Services/studentattendace.service';

@Component({
  selector: 'app-view-student-attendence',
  templateUrl: './view-student-attendence.component.html',
  styleUrls: ['./view-student-attendence.component.css']
})
export class ViewStudentAttendenceComponent implements OnInit {
  courseObj = new Course();
  studentAttendanceObj = new Attendance();
  batches:BatchPojo[];
  courses:Course[];
  students:Student[];
  studentList:any=[];
  batchSelected: string;
  courseSelected: string;
  ELEMENT_DATA : Attendance[];
  displayedColumns: string [] = ['user_id','fname','lname','date','status','detail'];
  dataSource = new MatTableDataSource<Attendance>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private batchService:BatchService,private toastr: ToastrService,private courseservice:CourseService,private studentAttendanceService:StudentattendaceService) { 

    this.courseservice.getAllCourses().subscribe(res =>{
      console.log('response======>',res);
      this.courses=res;
       });

      this.batchService.getStudentBatches().subscribe(res =>{
      console.log('response=====>',res);
      this.batches=res;
       });
       }
  

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  onCourseSelect(event){
    this.courseSelected=event.course_id;
    console.log("===>",this.courseSelected); 
    }
    onBatchSelect(event){
      this.batchSelected=event.batch_id;
      console.log("====>",this.batchSelected);
      if(this.courseSelected && this.batchSelected){
      this.getAllStudentList(this.courseSelected,event.batch_id);
    }
  }                                      
    getAllStudentList(course_id,batch_id){
     console.log("batch_id===>",course_id,batch_id)
     let res=this.studentAttendanceService. getStudentAttendance(course_id,batch_id);
      res.subscribe(attendance=>this.dataSource.data = attendance as Attendance[]);
      this.studentList=res;  
  }

}
