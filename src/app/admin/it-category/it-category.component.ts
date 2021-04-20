import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Model/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-it-category',
  templateUrl: './it-category.component.html',
  styleUrls: ['./it-category.component.css']
})
export class ItCategoryComponent implements OnInit {

  cateObj=new Category();
  public catForm: NgForm;
  constructor(private categoryService:CategoryService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addCategory(catForm:NgForm){
    console.log("=====>",catForm.value);
    if(catForm.valid){
      this.cateObj.category=this.cateObj.category;
    }
   
    this.categoryService.addItCategoryName(this.cateObj).subscribe(res => {
      console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    timeOut: 200000
  });
  catForm.resetForm();
}
}
