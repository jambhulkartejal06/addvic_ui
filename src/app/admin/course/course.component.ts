import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { CategoryService } from 'src/app/Services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/Model/course';
import { Category } from 'src/app/Model/category';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseObj = new Course();
  cateObj = new Category();
  category: Category[];
  courseForm: FormGroup;
  selectedFile= null;
  courseImage: any=null;
  coursePDF: any=null;
  categorySelected: string;

  constructor(
    private courseService: CourseService,
    private categoryService: CategoryService,private toastr: ToastrService
  ) {}
  
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      courseName: new FormControl('',[Validators.required]),
      courseImage: new FormControl(''),
      coursePDF: new FormControl(''),
      category: new FormControl(''),
      basicPlan: new FormControl(''),
      premiumPlan : new FormControl(''),
    });
    console.log('form value ========>', this.courseForm.value)
  
    // this.category =[
    //   {cat_id:1,category:'IT'},
    //   {cat_id:2,category:'Mech'},
    //   {cat_id:3,category:'Civil'}
    // ]
 
     this.categoryService.getCategoryName().subscribe(res => {
      console.log('response======>', res);
      this.category = res;
    });
  }

    addCourseDetails() {
    var formData: any = new FormData();
    formData.append("courseImage", this.courseForm.get('courseImage').value);
    formData.append("coursePDF", this.courseForm.get('coursePDF').value);
    formData.append("courseName", this.courseForm.get('courseName').value);
    formData.append("basicPlan", this.courseForm.get('basicPlan').value);
    formData.append("premiumPlan", this.courseForm.get('premiumPlan').value);
    formData.append("category",this.categorySelected);

    this.courseService.addCourses(formData).subscribe(res =>{
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

    onFileInputPdf(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.courseForm.patchValue({
    coursePDF:
    file
    });
    
    this.courseForm.get('coursePDF').updateValueAndValidity()
    } 

    onCategorySelect(event){
    this.categorySelected=event.category;
    console.log("===>",this.categorySelected); 
    }
      
    clearForm() {
    this.courseForm.reset();
    this.category = [];
    // this.courseImage = [];
    // this.coursePDF = null;
    }
     
  }



