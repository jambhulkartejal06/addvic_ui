import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
import { DialogService } from 'src/app/Services/dialog.service';
import { StudentattendaceService } from 'src/app/Services/studentattendace.service';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})

export class StudentAttendanceComponent implements OnInit {
  itcourses:Course[];
  courseObj = new Course();
  studentAttendanceObj = new Attendance();
  batches:BatchPojo[];
  courses:Course[];
  newcourse:Course[];
  students:Student[];
  studentAttendanceForm: FormGroup;
  selectedFile = null;
  batchSelected: string;
  courseSelected: string;
  itCourseSelected: string;
  ELEMENT_DATA : Attendance[];
  displayedColumns: string [] = ['firstName','lastName','status'];
  studentList:any=[];
  newStudentList:any=[];
  studentAttendenceStatus;
  status:boolean = false;
  dataSource = new MatTableDataSource<Attendance>();
            @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
            @ViewChild(MatSort, {static: true}) sort: MatSort;
  studentattendence: number;
            
  constructor(private studentAttendanceService:StudentattendaceService,private batchService:BatchService,private toastr: ToastrService,private courseservice:CourseService,private dialogservice: DialogService) {

  }
  ngOnInit(): void {
    this.getAllCourseList()
    this.studentAttendanceForm = new FormGroup({
      course_id: new FormControl('',[Validators.required]),
      batch_id: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      detail: new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),
      checked:new FormControl('',[Validators.required])
    });

    console.log('form value ========>', this.studentAttendanceForm.value);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      }
      getAllCourseList(){
        // this.courseservice.getAllCourses().subscribe(res =>{
        //   console.log('response======>',res);
        //   this.newcourse=res;
        //   this.courses=[...this.newcourse]
        //    });
          this.batchService.getStudentBatches().subscribe(res =>{
          console.log('response=====>',res);
          this.batches=res;
           });
           this.courseservice.getItAndMechCoursesList().subscribe(res =>{
             console.log('response====>',res);
             this.courses=res;
           })
          //  this.courseservice.getAllItCourses().subscribe(res =>{
          //    console.log('response=====>',res);
          //   this.itcourses=res;
          //   this.courses=[...this.itcourses]
          //   console.log("responsecourses======>",this.courses);
          //  })
           
      }
        
      applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
  
    onSubmitAttendance(){
     this.studentList=this.dataSource.data;
    console.log("tabledatalist========>",this.studentList)
    //Copy the specific value from the list
      for(const item of this.studentList){
      this.newStudentList.push({
       student_id:item.user_id,
        // firstname:item.firstName,
        // lastname:item.lastName,
        status:item.checked === true ? '1':'0'
      })
      }
      //get value for date and details and mutliple array
      const body= {
        date:this.studentAttendanceObj.date,
        detail:this.studentAttendanceObj.detail,
        studentAttendanceDetails:this.newStudentList
      }
      console.log("bodyList=====>",body);
      this.studentAttendanceService.studentAttendance(body).subscribe(res =>{
        this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
        });
        console.log('response======>', res);
        });  
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
       let res=this.studentAttendanceService.getListByBatchAndCourse(course_id,batch_id);
        res.subscribe(attendance=>this.dataSource.data = attendance as Attendance[]);
        this.studentList=res;  
    }
  
    // getComment(){
    // this.studentAttendanceService.getComments().subscribe(res =>{
    //   console.log('comment=====>', res);
    // });
    
      clearForm() {
        this.studentAttendanceForm.reset();
        this.courses = [];
        this.batches = [];
        this.studentList = "";
      }
      }
  
            
           
          
            
              

