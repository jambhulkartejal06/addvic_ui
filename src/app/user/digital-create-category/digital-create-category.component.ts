import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryDigitalMarketing } from 'src/app/Model/digitalMarketingCategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-digital-create-category',
  templateUrl: './digital-create-category.component.html',
  styleUrls: ['./digital-create-category.component.css']
})
export class DigitalCreateCategoryComponent implements OnInit {

  cateObj=new CategoryDigitalMarketing();
  public catForm: NgForm;
  constructor(private categoryService:CategoryService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  createCategory(catForm:NgForm){
    console.log("=====>",catForm.value);
    if(catForm.valid){
      this.cateObj.category=this.cateObj.category;
    }
   
    this.categoryService.createCategoryName(this.cateObj).subscribe(res => {
      console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    timeOut: 200000
  });
  catForm.reset();
}
}

