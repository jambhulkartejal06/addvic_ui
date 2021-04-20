import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminCertificate } from 'src/app/Model/adminCertificate';
import { Course } from 'src/app/Model/course';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-certificate-details',
  templateUrl: './certificate-details.component.html',
  styleUrls: ['./certificate-details.component.css']
})
export class CertificateDetailsComponent implements OnInit {
  certificateObj = new AdminCertificate();
  // public certificateForm: NgForm;
  public certificateForm:FormGroup;
  courses:Course[];
  constructor(private adminService:AdminService,private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.certificateForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      // certificateNumber: new FormControl('', [Validators.required]),
      // selectCourse: new FormControl('', [Validators.required]),
      // selectType: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate : new FormControl('', [Validators.required]),
      course : new FormControl('', [Validators.required]),
    });
    console.log("form value ========>", this.certificateForm.value);
  }
  //  submit(certificateForm : NgForm):void{
   
  //     console.log("======>",certificateForm.value);
  //     if(certificateForm.valid){ 
  //       this.certificateObj.fullName=this.certificateObj.fullName;
  //       this.certificateObj.startDate=this.certificateObj.startDate;
  //       this.certificateObj.endDate=this.certificateObj.endDate;
  //       this.certificateObj.course=this.certificateObj.course;
  //     }
  //  this.adminService.createCertificateForm(this.certificateObj).subscribe(res => {
  //  console.log("response======>",res);
     
  //   });
    
submit(){
var formData: any = new FormData();
formData.append("fullName", this.certificateForm.get('fullName').value);
formData.append("startDate", this.certificateForm.get('startDate').value);
formData.append("endDate", this.certificateForm.get('endDate').value);
formData.append("course", this.certificateForm.get('course').value);

this.adminService.createCertificateForm(formData).subscribe(res => {
  console.log('response======>', res);
 
});
this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
  timeOut: 200000
});
  }

clearForm() {
  this.certificateForm.reset(); 
 }

}



