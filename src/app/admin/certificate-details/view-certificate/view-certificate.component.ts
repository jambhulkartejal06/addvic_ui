import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminCertificate } from 'src/app/Model/adminCertificate';
import { AdminService } from 'src/app/Services/admin.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.css']
})
export class ViewCertificateComponent implements OnInit {
  
  ELEMENT_DATA :  AdminCertificate[];
  displayedColumns: string [] = ['fullName','startDate','endDate','course','certificateNumber','action'];

  dataSource = new MatTableDataSource<AdminCertificate>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private adminService:AdminService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.getAllCategory();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllCategory(){
    let res=this.adminService.getCertificateForm();
    res.subscribe(certificate=>this.dataSource.data = certificate as AdminCertificate[]);
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

  onDelete(certificate,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(certificate,index);
      }
  });
      
  
  
    }
    removeData(certificate,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.adminService.deleteCertificate(certificate.certificateNumber).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       
    });
    
    this.dataSource.data=data;
    
  
    }
  }
  
  
  