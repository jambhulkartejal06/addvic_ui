import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Category } from 'src/app/Model/category';
import { CategoryService } from 'src/app/Services/category.service';
import { DialogService } from 'src/app/Services/dialog.service';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
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
    let res=this.categoryservice.getCategoryName();
  
    res.subscribe(category=>this.dataSource.data = category as Category[]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // deleteE(cat_id) {
  //   console.log('delete element==>',cat_id);
  //   this.categoryservice.deleteCategory(cat_id).subscribe((req: any) => {
  //     this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
  //       timeOut: 200000
  //     });
  //   });
  // }

  

  onDelete(categories,index){
  this.dialogservice.openConfirmDialog('Are you sure to delete this record?')
  .afterClosed().subscribe(res=>{
    
    if(res){
      this.removeData(categories,index);
    }
});
    


  }
  removeData(categories,index){
    const data=this.dataSource.data;
    console.log("beforedata",data)
   
    data.splice(index,1)
    console.log("afterdata",data)
    this.categoryservice.deleteCategory(categories.cat_id).subscribe(res => {
    });
      this.toastr.success('Data Deleted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 1000
     
  });
    
  this.dataSource.data=data;
  

  }
}
