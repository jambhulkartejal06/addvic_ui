import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from '../Model/batchPojo';
import { Course } from '../Model/course';
import { Student } from '../Model/student';
import { CounsellorService } from '../Services/counsellor.service';
import { StaffService } from '../Services/staff.service';
import { ViewCounsellorComponent } from './view-counsellor/view-counsellor.component';

@Component({
  selector: 'app-counsellor',
  templateUrl: './counsellor.component.html',
  styleUrls: ['./counsellor.component.css']
})
export class CounsellorComponent implements OnInit {

  studObj=new Student();
  counsellorForm: FormGroup;
  batches:BatchPojo[];
  courses:Course[];
  user:FormData[];
  selectedFile= null;
  image: any=null;
  bloodGroupSelected: string;
  bloodGroup : any[] = [{bloodGroup:'A+'},
  {bloodGroup:'B+'},
  {bloodGroup:'AB+'},
  {bloodGroup:'O+'},
  {bloodGroup:'A-'},
  {bloodGroup:'B-'},
  {bloodGroup:'O-'},
  {bloodGroup:'AB-'}
]; 
mySelectedItem: string;
  isEditMode:boolean;
    constructor(private counsellorsrvice:CounsellorService,private fb: FormBuilder,private toastr: ToastrService,private staffservice:StaffService,private counsellorService:CounsellorService,private router: Router,private route: ActivatedRoute) {
    }
  
    ngOnInit(): void {
     
      this.counsellorForm =  new FormGroup({
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
     console.log('form value ========>', this.counsellorForm.value);
     this.mySelectedItem = 'CR';

    this.isEditMode=this.counsellorService.getEditMode();
    console.log("isEdit====>",this.isEditMode);
    console.log("Edit==>",this.route.snapshot.params.isAdd);
    this.counsellorsrvice.getCurrentData(this.route.snapshot.params.user_id).subscribe((result)=>{
    this.counsellorForm =  new FormGroup({
     
       image: new FormControl(result['image']),
        firstName: new FormControl(result['firstName']),
        middleName: new FormControl(result['middleName']),
        lastName: new FormControl(result['lastName']),
        gender : new FormControl(result['gender']),
        mothersName : new FormControl (result['mothersName']),
        mobileNumber : new FormControl (result['mobileNumber']),
        parentNumber : new FormControl (result['parentNumber']),
        address : new FormControl (result['address']),
        city : new FormControl (result['city']),
        state : new FormControl (result['state']),
        pincode : new FormControl (result['pincode']),
        adharNumber :new FormControl (result['adharNumber']),
        dateOfBirth : new FormControl (result['dateOfBirth']),
        higherQualification: new FormControl (result['higherQualification']),
        email: new FormControl(result['email']),
        username: new FormControl(result['username']),
        password: new FormControl(result['password']),
        bloodGroup: new FormControl(result['bloodGroup']),  
    });
   })
   }
  
   submit() {
     var formData: any = new FormData();
     formData.append("image", this.counsellorForm.get('image').value);
     formData.append("firstName", this.counsellorForm.get('firstName').value);
     formData.append("middleName", this.counsellorForm.get('middleName').value);
     formData.append("lastName", this.counsellorForm.get('lastName').value);
     formData.append("gender", this.counsellorForm.get('gender').value);
     formData.append("mothersName", this.counsellorForm.get('mothersName').value);
     formData.append("mobileNumber ", this.counsellorForm.get('mobileNumber').value);
     formData.append("parentNumber", this.counsellorForm.get('parentNumber').value);
     formData.append("address", this.counsellorForm.get('address').value);
     formData.append("city", this.counsellorForm.get('city').value);
     formData.append("state", this.counsellorForm.get('state').value);
     formData.append("pincode", this.counsellorForm.get('pincode').value);
     formData.append("adharNumber", this.counsellorForm.get('adharNumber').value);
     formData.append("dateOfBirth", this.counsellorForm.get('dateOfBirth').value);
     formData.append("higherQualification", this.counsellorForm.get('higherQualification').value);
     formData.append("email", this.counsellorForm.get('email').value);
     formData.append("username", this.counsellorForm.get('email').value);
     formData.append("password", this.counsellorForm.get('password').value);
     formData.append("role", this.counsellorForm.get('role').value);
     formData.append("bloodGroup", this.bloodGroupSelected);
   
     this.counsellorsrvice.createCounsellor(formData).subscribe(res => {
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
     this.counsellorForm.patchValue({
       image:
        file
     });
     this.counsellorForm.get('image').updateValueAndValidity()
   }
  
   onBloodGroupSelect(event){
    this.bloodGroupSelected=event.bloodGroup;
    console.log("===>",this.bloodGroupSelected);{
  
  }
}

  getAllData(){
    this.router.navigate(['/users']);
  }

  updateStaffCounsellor(){
  this.staffservice.updateStaff(this.route.snapshot.params.user_id,this.counsellorForm.value).subscribe((result)=>{
  console.log(result);
  });
  this.toastr.success('Data Updated Successfully !!!!!', 'Toastr fun!', {
    timeOut: 1000
  });
  }
}
