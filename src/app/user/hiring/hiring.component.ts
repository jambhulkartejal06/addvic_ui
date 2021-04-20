import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/Model/designation';
import { Hiring } from 'src/app/Model/hiring';
import { DesignationService } from 'src/app/Services/designation.service';
import { HiringService } from 'src/app/Services/hiring.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {
  responsive = true;
  cols = 1;
  hiringObj = new Hiring;
  hiringForm: FormGroup;
  designationName: Designation[];
  designationSelected: string;
  constructor( private hiringservice: HiringService,private designationservice:DesignationService,
   private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.hiringForm = new FormGroup({
     fullName: new FormControl('',[Validators.required]),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
      message: new FormControl(''),
      resume: new FormControl(''),
      designation : new FormControl(''),
    });
    console.log('form value ========>', this.hiringForm.value)
    this.designationservice.getAllDesignation().subscribe(res => {
      console.log('response======>', res);
      this.designationName = res;
     
    });
  }
  addHiringDetails() {
     
    var formData: any = new FormData();
    formData.append("fullName", this.hiringForm.get('fullName').value);
    formData.append("email", this.hiringForm.get('email').value);
    formData.append("phoneNo", this.hiringForm.get('phoneNo').value);
    formData.append("message", this.hiringForm.get('message').value);
    formData.append("resume", this.hiringForm.get('resume').value);
    formData.append("designation",this.designationSelected);


    this.hiringservice.createHiring(formData).subscribe(res => {
     
      console.log('response======>', res);
     
    });
     this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 200000
      });
   
 
}
 
    onFileInput(event){
      const file = (event.target as HTMLInputElement).files[0];
      this.hiringForm.patchValue({
       
         resume:
         file
      });
     
      this.hiringForm.get('resume').updateValueAndValidity()
      
      }
     
      onDesignationSelect(event){
        this.designationSelected=event.designationName;
        console.log("===>",this.designationSelected);
       
        }
      
        clearForm() {
          this.hiringForm.reset();
         }
         
     
  }


