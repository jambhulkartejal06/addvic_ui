import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { OurTraining } from 'src/app/Model/training';
import { DialogService } from 'src/app/Services/dialog.service';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-view-mech-lead',
  templateUrl: './view-mech-lead.component.html',
  styleUrls: ['./view-mech-lead.component.css']
})
export class ViewMechLeadComponent implements OnInit {
  public selectedName:any;
  ELEMENT_DATA : OurTraining[];
  displayedColumns: string [] = ['position','fullName','email','mobile','enrollmentInterest','created','comment','status','action'];
  selectedcolor:any;
  dataSource = new MatTableDataSource<OurTraining>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  value
  selected: any;
    constructor(private trainingservice:TrainingService,private dialogservice: DialogService,private toastr: ToastrService ) { }
  
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
    let res=this.trainingservice.getAllTraining();
    res.subscribe(training=>{tempArr = training as OurTraining[]

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
      this.trainingservice.deleteEnrollment(training.id).subscribe(res => {
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
  
    
  
  
  