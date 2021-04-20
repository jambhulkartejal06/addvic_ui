import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/Model/service';
import { DialogService } from 'src/app/Services/dialog.service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  ELEMENT_DATA : Service[];
  displayedColumns: string [] = ['service_id','fullName','email','mobile','service','action'];
  
  dataSource = new MatTableDataSource<Service>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    constructor(private serviceService:ServiceService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this. getAllServiceName();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllServiceName(){
    let res=this.serviceService.getAllService();
    res.subscribe(service=>this.dataSource.data = service as Service[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(services,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(services,index);
      }
  });
      
    }
    removeData(services,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      // this.serviceService.deleteCategory(services.service_id).subscribe(res => {
      // });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       
    });
      
    this.dataSource.data=data;
    
  
    }
  }

