import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-birthday',
  templateUrl: './student-birthday.component.html',
  styleUrls: ['./student-birthday.component.css']
})
export class StudentBirthdayComponent implements OnInit {
  ELEMENT_DATA: Student[];
  displayedColumns: string[] = ['firstName','lastName','email','dateOfBirth','mobileNumber'];
  
  
  dataSource = new MatTableDataSource<Student>();
  tabledata: any;
  data: any;
   
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
 
  constructor(private toastr: ToastrService,private studentService:StudentService) { }
  
  ngOnInit() {

    this.getAllDetails();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  getAllDetails(){
  let res=this.studentService.getBirthday();
  res.subscribe(student=>this.dataSource.data = student as Student[]);
}

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
