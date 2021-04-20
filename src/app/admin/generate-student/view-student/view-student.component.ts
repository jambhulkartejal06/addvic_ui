import {Component, OnInit,ViewChild, Inject } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Services/student.service';
import { ToastrService } from 'ngx-toastr';
import { StudentDetailsComponent } from 'src/app/student-details/student-details.component';

export interface DialogData {
 
}

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  ELEMENT_DATA: Student[];
  displayedColumns: string[] = ['firstName','middleName','lastName','gender','dateOfBirth','email','mobileNumber','courseName','batch','action'];
  
  
  dataSource = new MatTableDataSource<Student>();
  tabledata: any;
  data: any;
   
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
 
  constructor(private toastr: ToastrService,private studentService:StudentService,public dialog:MatDialog,public router: Router) { }
  
  ngOnInit() {
    this.studentService.setEditMode(true);
    this.getAllDetails();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
  
  getAllDetails(){
  let res=this.studentService.getAllData();
  res.subscribe(student=>this.dataSource.data = student as Student[]);
}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(tabledata): void {
    console.log("tb=====>", tabledata);
    const dialogRef = this.dialog.open(StudentDetailsComponent, {
      disableClose: true,
      width: '700px',
      height: '800px',
      data: tabledata
    });
    console.log("dialogRef===>",dialogRef);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;

    });

  }
  getDetail(){
  this.router.navigate(["studentdetails"]);

}

} 
