import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/Model/contactUs';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  ELEMENT_DATA : ContactUs[];
  displayedColumns: string [] = ['fullName','email','mobileNumber','message','action'];
  
  dataSource = new MatTableDataSource<ContactUs>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  constructor(private contactservice:ContactUsService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.getAllFeedbacks();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllFeedbacks(){
    let res=this.contactservice.getAllContact();
    res.subscribe(batches=>this.dataSource.data = batches as ContactUs[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteE(event,contact_id) {
    console.log('delete element==>', event, contact_id);
    this.contactservice.deleteContact(contact_id).subscribe((req: any) => {
      this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 200000
      });
    });
  }
  onDelete(contact,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(contact,index);
      }
       });
    }
    removeData(contact,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.contactservice.deleteContact(contact.contact_id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
    });
    this.dataSource.data=data;
    }
  }
  
  
  