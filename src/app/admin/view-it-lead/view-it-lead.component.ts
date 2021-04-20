import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { OurTraining } from 'src/app/Model/training';
import { DialogService } from 'src/app/Services/dialog.service';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-view-it-lead',
  templateUrl: './view-it-lead.component.html',
  styleUrls: ['./view-it-lead.component.css']
})
export class ViewItLeadComponent implements OnInit {

  ELEMENT_DATA : OurTraining[];
  displayedColumns: string [] = ['position','fullName','email','mobile','itEnrollmentInterest','action'];
  
  dataSource = new MatTableDataSource<OurTraining>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  
  constructor(private trainingservice:TrainingService,private dialogservice: DialogService,private toastr: ToastrService ) { }
  
  ngOnInit(): void {
  this.getTraining();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getTraining(){
    let res=this.trainingservice.getAllItTraining();
    res.subscribe(training=>this.dataSource.data = training as OurTraining[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // deleteE(event,id) {
  //   console.log('delete element==>',event,id);
  //   this.trainingservice.deleteEnrollment(id).subscribe((req: any) => {
  //     this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
  //       timeOut: 200000
  //     });
  //   });
  // }
  onDelete(training,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(training,index);
      }
  });
      
  
  
    }
    removeData(training,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.trainingservice.deleteEnrollment(training.id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
    });
      
    this.dataSource.data=data;
    }
  }
  
    
  
  