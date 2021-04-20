import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';
import { DialogService } from 'src/app/Services/dialog.service';



@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  ELEMENT_DATA : Course[];
  displayedColumns: string [] = ['course_id','courseName','basicPlan','premiumPlan','categories','action'];
  dataSource = new MatTableDataSource<Course>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tabGroup: any;
 
  constructor(private courseservice:CourseService, private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.getCourse();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
    
  
  public getCourse(){
    let res=this.courseservice.getAllCourses();
   
    res.subscribe(course=>this.dataSource.data = course as Course[]);
    
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // openDialog(tabledata): void {
  //   console.log("tb=====>", tabledata);
  //   const dialogRef = this.dialog.open(StudentDetailsComponent, {
  //     disableClose: true,
  //     width: '600px',
  //     height: '480px',
  //     data: tabledata
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.data = result;

  //   });

  // }
  

  getDetail(course_id) {
    this.tabGroup.selectedIndex = 1;
    console.log('in detail===========>');
    console.log("mattab", this.tabGroup.selectedIndex);

  //   this.courseservice.getDetailsById(Id).subscribe((req: any) => {
  //     this.tempId = req.data[0].Id;
  //     this.studentForm.patchValue({
  //       name: req.data[0].Name,
  //       email: req.data[0].Email,
  //       sub1: req.data[0].Sub1,
  //       sub2: req.data[0].Sub2,
  //       sub3: req.data[0].Sub3,
  //     })
  //   });
    
  //   this.updateId = Id;
  //   this.isEditMode = this.updateId;

  // }
  // public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  //   console.log(tabChangeEvent);
  // }
  // updateDetails(element) {
  //   var Id = this.updateId;
  //   console.log("updateId is======>", Id);
  //   var tempData = {
  //     'id': this.tempId,
  //     'name': this.studentForm.value.name,
  //     'email': this.studentForm.value.email,
  //     'sub1': Number(this.studentForm.value.sub1),
  //     'sub2': Number(this.studentForm.value.sub2),
  //     'sub3': Number(this.studentForm.value.sub3),

  //   }
  //   console.log("temp====>", tempData);
  //   alert("Data Submited Successfully !!!!");

  //   this.se.updateStudent(tempData).subscribe((Id: any) => {
  //     console.log(Id)
  //   })
    window.location.reload();
  }
  Reload() {
    location.reload();
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
      this.courseservice.deleteCourses(course.id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       
    });
      
    this.dataSource.data=data;
    
  
    }
  }
  
  
  


