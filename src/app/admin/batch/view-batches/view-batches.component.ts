import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from 'src/app/Model/batchPojo';
import { BatchService } from 'src/app/Services/batch.service';
import { DialogService } from 'src/app/Services/dialog.service';


@Component({
  selector: 'app-view-batches',
  templateUrl: './view-batches.component.html',
  styleUrls: ['./view-batches.component.css']
})
export class ViewBatchesComponent implements OnInit {
  
ELEMENT_DATA : BatchPojo[];
displayedColumns: string [] = ['batch_id','batch','action'];

dataSource = new MatTableDataSource<BatchPojo>();
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private batchservice:BatchService,private dialogservice: DialogService,private toastr: ToastrService) { }

ngOnInit(): void {
this.getAllBatches();
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
  }

public getAllBatches(){
  let res=this.batchservice.getStudentBatches();
  res.subscribe(batches=>this.dataSource.data = batches as BatchPojo[]);
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
deleteE(event,batch_id) {
  console.log('delete element==>', event, batch_id);
  this.batchservice.deleteBatch(batch_id).subscribe((req: any) => {
    this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
      timeOut: 1000
    });
  });
}
onDelete(batches,index){
  this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
  .afterClosed().subscribe(res=>{
    
    if(res){
      this.removeData(batches,index);
    }
});
    


  }
  removeData(batches,index){
    const data=this.dataSource.data;
    console.log("beforedata",data)
   
    data.splice(index,1)
    console.log("afterdata",data)
    this.batchservice.deleteBatch(batches.batch_id).subscribe(res => {
    });
      this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 200000
     
  });
  this.dataSource.data=data;
  }
}


// deleteBatches(batch_id: number) {  
//   this.batchservice.deleteBatch(batch_id)  
//     .subscribe(  
//       data => {  
//         console.log(data);  
//         // this.deleteMessage=true;  
//         this.batchservice.getStudentBatches().subscribe(data =>{  
//           this.batch =data  
//           })  
//       });
//     } 
  // }
  