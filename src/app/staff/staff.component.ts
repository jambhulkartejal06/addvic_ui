import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from '../Model/batchPojo';
import { Course } from '../Model/course';
import { Student } from '../Model/student';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  studObj=new Student();
  staffForm: FormGroup;
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
mySelectedItem: string;
isEditMode:boolean;
    constructor(private staffservice:StaffService,private fb: FormBuilder,private toastr: ToastrService,private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      
      this.staffForm =  new FormGroup({
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
     console.log('form value ========>', this.staffForm.value);
     this.mySelectedItem = 'SF';
   
   this.isEditMode=this.staffservice.getEditMode();
   console.log("isEdit====>",this.isEditMode);
   console.log("Edit==>",this.route.snapshot.params.isAdd);
   this.staffservice.getCurrentData(this.route.snapshot.params.user_id).subscribe((result)=>{
   this.staffForm =  new FormGroup({
    
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
   //  this.userForm.value.image=this.image;
   // console.log(this.userForm.value);
  
     var formData: any = new FormData();
     formData.append("image", this.staffForm.get('image').value);
     formData.append("firstName", this.staffForm.get('firstName').value);
     formData.append("middleName", this.staffForm.get('middleName').value);
     formData.append("lastName", this.staffForm.get('lastName').value);
     formData.append("gender", this.staffForm.get('gender').value);
     formData.append("mothersName", this.staffForm.get('mothersName').value);
     formData.append("mobileNumber ", this.staffForm.get('mobileNumber').value);
     formData.append("parentNumber", this.staffForm.get('parentNumber').value);
     formData.append("address", this.staffForm.get('address').value);
     formData.append("city", this.staffForm.get('city').value);
     formData.append("state", this.staffForm.get('state').value);
     formData.append("pincode", this.staffForm.get('pincode').value);
     formData.append("adharNumber", this.staffForm.get('adharNumber').value);
     formData.append("dateOfBirth", this.staffForm.get('dateOfBirth').value);
     formData.append("higherQualification", this.staffForm.get('higherQualification').value);
     formData.append("email", this.staffForm.get('email').value);
     formData.append("username", this.staffForm.get('email').value);
     formData.append("password", this.staffForm.get('password').value);
     formData.append("role", this.staffForm.get('role').value);
     formData.append("bloodGroup", this.bloodGroupSelected);
   
     this.staffservice.createStaff(formData).subscribe(res => {
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
     this.staffForm.patchValue({
       image:
        file
     });
     this.staffForm.get('image').updateValueAndValidity()
   }
   onBloodGroupSelect(event){
    this.bloodGroupSelected=event.bloodGroup;
    console.log("===>",this.bloodGroupSelected);{
  }
}
updateStaffCounsellor(){
  this.staffservice.updateStaff(this.route.snapshot.params.user_id,this.staffForm.value).subscribe((result)=>{
  console.log(result);
  });
  this.toastr.success('Data Updated Successfully !!!!!', 'Toastr fun!', {
    timeOut: 1000
  });
  }
}