import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryInternship } from 'src/app/Model/internshipCategory';
import { CourseInternship } from 'src/app/Model/internshipCourse';
import { CategoryService } from 'src/app/Services/category.service';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-intership-create-course',
  templateUrl: './intership-create-course.component.html',
  styleUrls: ['./intership-create-course.component.css']
})
export class IntershipCreateCourseComponent implements OnInit {

  courseObj = new CourseInternship();
  cateObj = new CategoryInternship();
  intern: CategoryInternship[];
  courseForm: FormGroup;
  selectedFile= null;
  courseImage: any=null;
  categorySelected: string;

  constructor( private courseService: CourseService,
    private categoryService: CategoryService,private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      courseName: new FormControl('',[Validators.required]),
      courseImage: new FormControl(''),
     duration: new FormControl(''),
      intern: new FormControl(''),
  });
  console.log('form value ========>', this.courseForm.value)
  this.categoryService.getInternshipAllCategory().subscribe(res => {
    console.log('response======>', res);
    this.intern = res;
  });
}
addCourseDetails() {
  var formData: any = new FormData();
  formData.append("courseImage", this.courseForm.get('courseImage').value);
  formData.append("courseName", this.courseForm.get('courseName').value);
  formData.append("duration",this.courseForm.get('duration').value);
  formData.append("intern",this.categorySelected);

  this.courseService.createInternshipCourse(formData).subscribe(res =>{
  console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!','Toastr fun!', {
      timeOut: 200000
    });
  }

  onFileInputImage(event){
  const file = (event.target as HTMLInputElement).files[0];
  this.courseForm.patchValue({
  courseImage:
  file,
  });
  this.courseForm.get('courseImage').updateValueAndValidity()
  }

  // onFileInputPdf(event){
  // const file = (event.target as HTMLInputElement).files[0];
  // this.courseForm.patchValue({
  // coursePDF:
  // file
  // });
  
  // this.courseForm.get('coursePDF').updateValueAndValidity()
  // } 

  onCategorySelect(event){
  this.categorySelected=event.categoryName;
  console.log("===>",this.categorySelected); 
  }
    
  clearForm() {
  this.courseForm.reset();
  this.intern = [];
  // this.courseImage = [];
  // this.coursePDF = null;
  }
   
}