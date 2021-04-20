import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnrollmentInternship } from 'src/app/Model/internshipEnrollment';
import { DialogService } from 'src/app/Services/dialog.service';
import { IntershipService } from 'src/app/Services/intership.service';

@Component({
  selector: 'app-view-internship-enrollment-intrest',
  templateUrl: './view-internship-enrollment-intrest.component.html',
  styleUrls: ['./view-internship-enrollment-intrest.component.css']
})
export class ViewInternshipEnrollmentIntrestComponent implements OnInit {

  public selectedName:any;
  ELEMENT_DATA : EnrollmentInternship[];
  displayedColumns: string [] = ['position','fullName','email','mobile','interest','created','comment','colour','action'];
  selectedcolor:any;
  dataSource = new MatTableDataSource<EnrollmentInternship>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  value
  selected: any;
    constructor(private trainingservice:IntershipService,private dialogservice: DialogService,private toastr: ToastrService ) { }
  
  ngOnInit(): void {
    this.selected='white';
  this.getTraining();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }

    onChange(value) {
      this.value = value;
      console.log("this",this.value)
    }
  
  public getTraining(){
    let tempArr=[];
    let res=this.trainingservice.getAllInternshipTraining();
    res.subscribe(training=>{tempArr = training as EnrollmentInternship[]

     tempArr.forEach(item => {item["color"]= "white";})
      this.dataSource.data=tempArr
      // this.dataSource.data.forEach(elem=>{
      //   console.log('elem',elem);
        
      //   this.dataSource.data['color'].push('white');
      //   // elem.push['color']
      // tempArr.push('color');
      // // tempArr[elem].push()
        
      // })
      console.log(' this.dataSource.data', this.dataSource.data);
    });

   
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
      this.trainingservice.deleteInternshipEnrollment(training.id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
    });
      
    this.dataSource.data=data;

  }
    public highlightRow(data) {
      this.selectedName = this.dataSource.data;

    }

    onSelection(selectedData) {
    this.selectedcolor=selectedData.colour;
    console.log(this.selectedcolor);
  }


  saveRow(rowData){

console.log('rowwwwwwwwww',rowData);
  }
  }
  
    
  
