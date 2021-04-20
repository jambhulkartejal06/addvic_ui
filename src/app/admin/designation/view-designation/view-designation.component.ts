import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/Model/designation';
import { DesignationService } from 'src/app/Services/designation.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-designation',
  templateUrl: './view-designation.component.html',
  styleUrls: ['./view-designation.component.css']
})
export class ViewDesignationComponent implements OnInit {

ELEMENT_DATA : Designation[];
displayedColumns: string [] = ['designation_id','designationName','action'];

dataSource = new MatTableDataSource<Designation>();
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private designationservice:DesignationService,private dialogservice: DialogService,private toastr: ToastrService) { }

ngOnInit(): void {
this.getAllDesignation();
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
  }

public getAllDesignation(){
  let res=this.designationservice.getAllDesignation();
  res.subscribe(designations=>this.dataSource.data = designations as Designation[]);
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
// deleteE(event,designation_id) {
//   console.log('delete element==>', event, designation_id);
//   this.designationservice.deleteDesignation(designation_id).subscribe((req: any) => {
//     this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
//       timeOut: 200000
//     });
//   });
// }


onDelete(designation,index){
  this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
  .afterClosed().subscribe(res=>{
    
    if(res){
      this.removeData(designation,index);
    }
});
    


  }
  removeData(designation,index){
    const data=this.dataSource.data;
    console.log("beforedata",data)
   
    data.splice(index,1)
    console.log("afterdata",data)
    this.designationservice.deleteDesignation(designation.designation_id).subscribe(res => {
    });
      this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 1000
     
  });
    
  this.dataSource.data=data;
  

  }
}


