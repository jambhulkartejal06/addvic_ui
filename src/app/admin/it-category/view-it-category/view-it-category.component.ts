import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Model/category';
import { CategoryService } from 'src/app/Services/category.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-view-it-category',
  templateUrl: './view-it-category.component.html',
  styleUrls: ['./view-it-category.component.css']
})
export class ViewItCategoryComponent implements OnInit {

  ELEMENT_DATA : Category[];
  displayedColumns: string [] = ['cat_id','category','action'];
  dataSource = new MatTableDataSource<Category>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
    constructor(private categoryservice:CategoryService,private dialogservice: DialogService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
  this.getAllCategory();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  public getAllCategory(){
    let res=this.categoryservice.getItCategoryName();
    res.subscribe(category=>this.dataSource.data = category as Category[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(category,index){
    this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res=>{
      
      if(res){
        this.removeData(category,index);
      }
  });
      
  
  
    }
    removeData(category,index){
      const data=this.dataSource.data;
      console.log("beforedata",data)
     
      data.splice(index,1)
      console.log("afterdata",data)
      this.categoryservice.deleteItCategory(category.cat_id).subscribe(res => {
      });
        this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
          timeOut: 1000
       
    });
      
    this.dataSource.data=data;
    }
  }
  
  
  
  
