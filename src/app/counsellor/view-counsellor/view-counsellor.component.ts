import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/Model/student';
import { CounsellorService } from 'src/app/Services/counsellor.service';

@Component({
  selector: 'app-view-counsellor',
  templateUrl: './view-counsellor.component.html',
  styleUrls: ['./view-counsellor.component.css']
})
export class ViewCounsellorComponent implements OnInit {
  ELEMENT_DATA: Student[];
  displayedColumns: string[] = ['firstName','middleName','lastName','gender','dateOfBirth','email','mobileNumber','bloodGroup','role','action'];
  
 
  dataSource = new MatTableDataSource<Student>();
  tabledata: any;
  data: any;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
 
  constructor(private toastr: ToastrService,private counsellorService:CounsellorService,public dialog:MatDialog,private router: Router) { }
  
  ngOnInit() {
  this.counsellorService.setEditMode(true);
  this.getAllDetails();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  getAllDetails(){
  let res=this.counsellorService.getAllData();
  res.subscribe(student=>this.dataSource.data = student as Student[]);
}

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}