import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Exam } from 'src/app/Model/exam';
import { DialogService } from 'src/app/Services/dialog.service';
import { ExamServiceService } from 'src/app/Services/exam-service.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  ELEMENT_DATA : Exam[];
  displayedColumns: string [] = ['courseName','batch','exam_id','exam_name','duration','passing_marks','status','action'];

  dataSource = new MatTableDataSource<Exam>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private examService:ExamServiceService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.examService.setEditMode(true);
  this.getAllExamList();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllExamList(){
    let res=this.examService.getExamList();
    res.subscribe(exam=>this.dataSource.data = exam as Exam[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // deleteE(event,certificateNumber) {
  //   console.log('delete element==>', event, certificateNumber);
  //   this.adminService.deleteCertificate(certificateNumber).subscribe((req: any) => {
  //     this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
  //       timeOut: 200000
  //     });
  //   });
  // }

  onDelete(exam,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(exam,index);
      }
     });
    }
    removeData(exam,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.examService.deleteExam(exam.exam_id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
    });
         this.dataSource.data=data;
    }
}
