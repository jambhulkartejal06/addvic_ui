import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/Model/designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designationObj=new Designation();
  public designationForm: NgForm;
  
  constructor(private designationservice:DesignationService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  createDesignation(designationForm:NgForm){
    console.log("createdesignation=====>",designationForm.value);
    if(designationForm.valid){
      this.designationObj.designationName= this.designationObj.designationName;
    }
  
   
    this.designationservice.createDesignationName(this.designationObj).subscribe(res => {
      console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    timeOut: 200000
  });
  designationForm.resetForm();
}

}

