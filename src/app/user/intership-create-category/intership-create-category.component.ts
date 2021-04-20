import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryInternship } from 'src/app/Model/internshipCategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-intership-create-category',
  templateUrl: './intership-create-category.component.html',
  styleUrls: ['./intership-create-category.component.css']
})
export class IntershipCreateCategoryComponent implements OnInit {
  cateObj=new CategoryInternship();
  public catForm: NgForm;
  constructor(private categoryService:CategoryService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  createCategory(catForm:NgForm){
    console.log("=====>",catForm.value);
    if(catForm.valid){
      this.cateObj.category=this.cateObj.category;
    }
   
    this.categoryService.createInternshipCategoryName(this.cateObj).subscribe(res => {
      console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    timeOut: 200000
  });
  catForm.reset();
}
}