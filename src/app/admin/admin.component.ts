import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from '../Model/batchPojo';
import { Course } from '../Model/course';
import { Student } from '../Model/student';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studObj=new Student();
 adminForm: FormGroup;
  batches:BatchPojo[];
  courses:Course[];
  user:FormData[];
  selectedFile= null;
  image: any=null;
  bloodGroupSelected: string;
  bloodGroup : any[] = [ {bloodGroup:'A+'},
  {bloodGroup:'B+'},
  {bloodGroup:'AB+'},
  {bloodGroup:'O+'},
  {bloodGroup:'A-'},
  {bloodGroup:'B-'},
  {bloodGroup:'O-'},
  {bloodGroup:'AB-'}
]; 
  
    constructor(private adminservice:AdminService,private fb: FormBuilder,private toastr: ToastrService) { }
  
    ngOnInit(): void {
      
      this.adminForm =  new FormGroup({
      image: new FormControl('', [Validators.required]),
       user_id:new FormControl(''),
       firstName: new FormControl('',[Validators.required]),
       middleName: new FormControl('',[Validators.required]),
       lastName: new FormControl('',[Validators.required]),
       gender : new FormControl('',[Validators.required]),
       mothersName : new FormControl ('',[Validators.required]),
       mobileNumber : new FormControl ('', [Validators.required]),
       parentNumber : new FormControl ('',[Validators.required]),
       address : new FormControl ('',[Validators.required]),
       city : new FormControl ('',[Validators.required]),
       state : new FormControl ('',[Validators.required]),
       pincode : new FormControl ('',[Validators.required]),
       adharNumber :new FormControl ('',[Validators.required]),
       dateOfBirth : new FormControl ('',[Validators.required]),
       higherQualification: new FormControl ('',[Validators.required]),
       email: new FormControl('', [Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]+'),Validators.email,Validators.required]),
       username: new FormControl('', [Validators.required]),
       password: new FormControl('',[Validators.required,
                                     Validators.minLength(5),
                                     Validators.maxLength(8)]),
                                     bloodGroup: new FormControl('',[Validators.required]),  
        role: new FormControl('',[Validators.required]),           
       // courseName: new FormControl('',[Validators.required]),
       // batchName: new FormControl('',[Validators.required])
     });
     console.log('form value ========>', this.adminForm.value);
   }
  
   submit() {
   //  this.userForm.value.image=this.image;
   // console.log(this.userForm.value);
  
     var formData: any = new FormData();
     formData.append("image", this.adminForm.get('image').value);
     formData.append("firstName", this.adminForm.get('firstName').value);
     formData.append("middleName", this.adminForm.get('middleName').value);
     formData.append("lastName", this.adminForm.get('lastName').value);
     formData.append("gender", this.adminForm.get('gender').value);
     formData.append("mothersName", this.adminForm.get('mothersName').value);
     formData.append("mobileNumber ", this.adminForm.get('mobileNumber').value);
     formData.append("parentNumber", this.adminForm.get('parentNumber').value);
     formData.append("address", this.adminForm.get('address').value);
     formData.append("city", this.adminForm.get('city').value);
     formData.append("state", this.adminForm.get('state').value);
     formData.append("pincode", this.adminForm.get('pincode').value);
     formData.append("adharNumber", this.adminForm.get('adharNumber').value);
     formData.append("dateOfBirth", this.adminForm.get('dateOfBirth').value);
     formData.append("higherQualification", this.adminForm.get('higherQualification').value);
     formData.append("email", this.adminForm.get('email').value);
     formData.append("username", this.adminForm.get('username').value);
     formData.append("password", this.adminForm.get('password').value);
     formData.append("role", this.adminForm.get('role').value);
     formData.append("bloodGroup", this.adminForm.get('bloodGroup').value);
   
     this.adminservice.createAdmin(formData).subscribe(res => {
      console.log('response======>', res);
      });
      this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 100000
      });
      
    }
       
     
   //  onFileInput(files){
   //   this.image= files.target.files[0].name;//url
   //   console.log("files===>",files);
   //   console.log("image===>",this.image);
    
   //  }
   
   onFileInput(event){
   const file = (event.target as HTMLInputElement).files[0];
     this.adminForm.patchValue({
       image:
        file
     });
     this.adminForm.get('image').updateValueAndValidity()
   }
  
   onBloodGroupSelect(event){
    this.bloodGroupSelected=event.bloodGroup;
    console.log("===>",this.bloodGroupSelected);{
  
  }
  }
}