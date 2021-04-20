import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from 'src/app/Model/batchPojo';
import { Course } from 'src/app/Model/course';
import { Student } from 'src/app/Model/student';
import { BatchService } from 'src/app/Services/batch.service';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-generate-student',
  templateUrl: './generate-student.component.html',
  styleUrls: ['./generate-student.component.css']
})
export class GenerateStudentComponent implements OnInit {
  fileData: File = null;
  studObj = new Student();
  userForm:FormGroup;
  batches:BatchPojo[];
  courses:Course[];
  user:FormData[];
  selectedFile= null;
  image: File=null;
  bloodGroupSelected: string;
  courseSelected:number;
  batchSelected:number;
  bloodGroup : any[] = [{bloodGroup:'A+'},
  {bloodGroup:'B+'},
  {bloodGroup:'AB+'},
  {bloodGroup:'O+'},
  {bloodGroup:'A-'},
  {bloodGroup:'B-'},
  {bloodGroup:'O-'},
  {bloodGroup:'AB-'}
]; 
genders :string[] = ['Male','Female','Others'];
mySelectedItem: string;
isEditMode:boolean;
value: string;
isDisabled: boolean;
emailid:string='';
 

  constructor(private studentService:StudentService,private courseService:CourseService,private batchService:BatchService,private fb: FormBuilder,private toastr: ToastrService,private route: ActivatedRoute) {
    this.courseService.getAllCourses().subscribe(res => {
      console.log('response======>',res);
      this.courses=res;
   });
   this.batchService.getStudentBatches().subscribe(res =>{
     console.log('response=====>', res);
     this.batches=res;
   })
  }
 
  ngOnInit(): void {
    this.userForm =  new FormGroup({
      image: new FormControl('', [Validators.required]),
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
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,
                                    Validators.minLength(5),
                                    Validators.maxLength(8)]),
      bloodGroup: new FormControl('',[Validators.required]),  
      role: new FormControl('',[Validators.required]),                     
      course_id: new FormControl('',[Validators.required]),
      batch_id: new FormControl('',[Validators.required])
    });
    console.log('form value ========>', this.userForm.value);
  
    this.mySelectedItem = 'STUDENT';
  

//for getting email
this.emailid=this.studentService.getemailId();
console.log("emailnew=====>",this.emailid);

// code for update
this.isEditMode=this.studentService.getEditMode();
  console.log(this.route.snapshot.params.user_id);
    this.studentService.getCurrentStudData(this.route.snapshot.params.user_id).subscribe((result)=>{
     this.userForm =  new FormGroup({
     
       image: new FormControl(result['image']),
        firstName: new FormControl(result['firstName']),
        middleName: new FormControl(result['middleName']),
        lastName: new FormControl(result['lastName']),
        gender : new FormControl(result['gender']),
        mothersName : new FormControl (result['mothersName']),
        mobileNumber : new FormControl (result['mobileNumber']),
        parentNumber : new FormControl (result['parentNumber']),
        address : new FormControl (result['address']),
        city : new FormControl(result['city']),
        state : new FormControl(result['state']),
        pincode : new FormControl(result['pincode']),
        adharNumber :new FormControl(result['adharNumber']),
        dateOfBirth : new FormControl(result['dateOfBirth']),
        higherQualification: new FormControl(result['higherQualification']),
        email: new FormControl(result['emailid']),
        username: new FormControl(result['emailid']),
        password: new FormControl(result['password']),
        bloodGroup: new FormControl(result['bloodGroup']),  
        course_id: new FormControl(result['courseSelected']),
        batch_id: new FormControl(result['batchSelected'])
    });
   })
  } 


// submit() {
//   const formData = new FormData();
//   formData.append('file', this.image);
  // formData.append('file', this.userForm.get('image').value);
// console.log("formdataimage====>",formData);
// const studentuserdto = {'firstName': this.studObj.firstName,
// 'middleName': this.studObj.middleName,
// 'lastName': this.studObj.lastName,
// 'gender': this.studObj.gender,
// 'mothersName': this.studObj.mothersName,
// 'mobileNumber': this.studObj.mobileNumber,
// 'parentNumber': this.studObj.parentNumber,
// 'address': this.studObj.address,
// 'city': this.studObj.city,
// 'state': this.studObj.state,
// 'pincode' : this.studObj.pincode,
// 'adharNumber': this.studObj.adharNumber,
// 'dateOfBirth': this.studObj.dateOfBirth,
// 'higherQualification' : this.studObj.higherQualification,
// 'email': this.emailid,
// 'username': this.emailid,
// 'password': this.studObj.password,
// 'bloodGroup': this.bloodGroupSelected,
// 'role': this.mySelectedItem,
// 'course_id' : this.courseSelected,
// 'batch_id' : this.batchSelected
// }

// const request={studentuserdto,image:'abc.jpg'}
// console.log("request====>",request);
// this.studentService.studentGenerateStudent(studentuserdto,this.fileData).subscribe(res => {
//   console.log('response======>', res);
//   this.user=res;
//   localStorage.setItem("userdata", JSON.stringify(this.user));
//   });
//   this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
//    timeOut: 1000

//   });




submit(){
var formData: any = new FormData();
formData.append("image", this.userForm.get('image').value);
formData.append("firstName", this.userForm.get('firstName').value);
formData.append("middleName", this.userForm.get('middleName').value);
formData.append("lastName", this.userForm.get('lastName').value);
formData.append("gender", this.userForm.get('gender').value);
formData.append("mothersName", this.userForm.get('mothersName').value);
formData.append("mobileNumber ", this.userForm.get('mobileNumber').value);
formData.append("parentNumber", this.userForm.get('parentNumber').value);
formData.append("address", this.userForm.get('address').value);
formData.append("city", this.userForm.get('city').value);
formData.append("state", this.userForm.get('state').value);
formData.append("pincode", this.userForm.get('pincode').value);
formData.append("adharNumber", this.userForm.get('adharNumber').value);
formData.append("dateOfBirth", this.userForm.get('dateOfBirth').value);
formData.append("higherQualification", this.userForm.get('higherQualification').value);
formData.append("email", this.emailid);
formData.append("username", this.emailid);
formData.append("password", this.userForm.get('password').value);
formData.append("role", this.userForm.get('role').value);
formData.append("bloodGroup", this.bloodGroupSelected);
formData.append("course_id", this.courseSelected);
formData.append("batch_id", this.batchSelected);

this.studentService.studentGenerateStudent(formData).subscribe(res => {
 console.log('response======>', res);
 this.user=res;
 localStorage.setItem("userdata", JSON.stringify(this.user));
 });
 this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
  timeOut: 1000

  
});

   }


// onFileInput(files){
//   this.image= files.target.files[0].name;//url
//   console.log("files===>",files);
//   console.log("image===>",this.image);

//  }


// onFileInput(fileInput: any) {
//   this.fileData = <File>fileInput.target.files[0];
  
// console.log("File========>",this.fileData)
// }

onFileInput(event){
const file = (event.target as HTMLInputElement).files[0];
this.userForm.patchValue({
  image:
   file
});
this.userForm.get('image').updateValueAndValidity()
}

// onFileInput(event){
//   if (event.target.files.length > 0) {
//         const file = event.target.files[0];
//         this.userForm.get('image').setValue(file);
//  }
// }


// onFileSelect(event) {
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.uploadForm.get('profile').setValue(file);
//   }


onBloodGroupSelect(event){
  this.bloodGroupSelected=event.bloodGroup;
  console.log("===>",this.bloodGroupSelected);


}
onCourseSelect(event){
this.courseSelected=event.course_id;
console.log("====>",this.courseSelected);
}
onBatchSelect(event){
  this.batchSelected=event.batch_id;
  console.log("====>",this.batchSelected);
}

updateStudent(){
  this.studentService.updateStudent(this.route.snapshot.params.user_id,this.userForm.value).subscribe((result)=>{
  console.log(result);
  })
  }

  openDialog(){
    
  }



  clearForm() {
    this.userForm.reset();
    this.batches = [];
    this.courses = [];
    this.bloodGroup = [];
} 
}
