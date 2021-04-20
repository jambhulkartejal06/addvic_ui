import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { CategoryDigitalMarketing } from 'src/app/Model/digitalMarketingCategory';
import { CourseDigitalMarketing } from 'src/app/Model/digitalMarketingCourse';
import { CategoryInternship } from 'src/app/Model/internshipCategory';
import { CourseInternship } from 'src/app/Model/internshipCourse';
import { EnrollmentInternship } from 'src/app/Model/internshipEnrollment';
import { CategoryService } from 'src/app/Services/category.service';
import { CourseService } from 'src/app/Services/course.service';
import { IntershipService } from 'src/app/Services/intership.service';

@Component({
  selector: 'app-intership-course',
  templateUrl: './intership-course.component.html',
  styleUrls: ['./intership-course.component.css']
})
export class IntershipCourseComponent implements OnInit {
  title='Mechanical Design Courses';
  imageToShow: any;
  fileUrl;
  public trainingForm: NgForm;
  trainingObj = new EnrollmentInternship();
  courseSelected: string;
  allExpandState: boolean = false;
  selectedCourses = []; 
  selectedCourseName  = [];
  catName:string;
  finalCourseName : string;
  categorySelected: string;
  category:string;
  categoryList = new FormControl();
  openCategory:boolean = true;
  user = new Array(new CategoryInternship());
  dropdowncat= [];
  selectedCategories = [];
  categories=[];
  courses:any=[];
  noCoursesFound:string='';
  flag:boolean=false;
  courseImage:File;
  encodedStringImage;
  img: any;
  

  slides = [{'image':'../assets/course-1.svg'}, {'image': '../assets/course-2.svg'},{'image': '../assets/course-3.svg'}, {'image': '../assets/course-4.svg'}];

// slides=[{'image':'../assets/website under construction.svg'},{'image':'../assets/website under construction.svg'}];
 
  constructor(private trainingservice:IntershipService,private courseService:CourseService,private categoryservice:CategoryService,private sanitizer: DomSanitizer,private http:HttpClient,private titleService: Title,
    private metaTagService: Meta,private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
      this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
      this.metaTagService.updateTag(
        { name: 'description', content: 'The role of Mechanical Design Engineer is a great opportunity for a self-motivated individual and they create designs and technical drawings for a mechanical device.'}
      );

      this.courseService.getAllInternshipCourse().subscribe(res => {
        console.log('courses======>', res);
        this.courses = res;

        for(let i=0; i<this.courses.length; i++){
          
          this.courses[i]['encodedStringImage']='data:image/jpg;base64,'+ this.courses[i]['courseImage'];
        }
        console.log("encodeImage====>",this.courses);
    });
    this.categoryservice.getInternshipAllCategory().subscribe(res => {
      console.log('response======>', res);
      this.categories = res;
    });
 
    const data = 'eJwrzs9NVShJrSgBABHoA5o=';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
     
  }
   
  

  selectCourse(selectedCourses: any) {
    const index: number = this.selectedCourses.findIndex((cat: any) => { 
      return cat.course_id === selectedCourses.course_id
    });
    
  
    if ( index === -1) {
      this.selectedCourses.push(selectedCourses.courseName);
      console.log("selectedcourses=====>",selectedCourses);
    } else {
      this.selectedCourses.splice(index, 1);
    }
     
    this.finalCourseName = this.selectedCourses.toString();
    this.encodedStringImage='data:/image/jpg+xml;base64,'+ selectedCourses.courseImage;
    // console.log("encodedStringimage====>",this.encodedStringImage);
    console.log("finalCourse=====>",this.finalCourseName);
    console.log('selected courses', this.selectedCourses);
  
  }
  
    send(trainingForm : NgForm){
      
      console.log("tarining===>",this.trainingObj);
      if(trainingForm.valid){ 
        this.trainingObj.fullName=this.trainingObj.fullName;
        this.trainingObj.email=this.trainingObj.email;
        this.trainingObj.mobile=this.trainingObj.mobile;
        this.trainingObj.interest=this.finalCourseName;
        console.log("#####################",this.selectedCourseName);
      }
      this.trainingservice.createInternshipTraining(this.trainingObj).subscribe(data1 => {
        console.log("response======>",data1);
  });
  // this.courseService.categorycourseById(this.selectedCourseName).subscribe(res =>{
      
  //   console.log('course by id======>', res);
  // });
}

  
    selectCategory(value) {
    console.log("value",value)
     

      const index: number = this.selectedCategories.findIndex((cat: any) => { 
        return cat.cat_id === value.cat_id
      });
    
      if ( index === -1) {
        this.selectedCategories.push(value);
      } else {
        this.selectedCategories.splice(index, 1);
      }
      this.courseService.getInternshipCourseByCategory(value.category).subscribe(res =>{
      console.log('course by id======>',res);
      if(res === ''){
        this.flag=true;
        this.noCoursesFound= 'No Courses Found';
      }
      console.log("nocourses====>",this.noCoursesFound);
      });
      
     
      this.categorySelected=value.category;
      this.openCategory = true;
      this.dropdowncat = [];
      this.selectedCategories.map(item => {
        let tempArray = [];
        tempArray = this.courses.filter( i => i.categories.cat_id === item.cat_id);
        this.dropdowncat.push(tempArray);
      });
    
      console.log("dropdowncategory====>",this.dropdowncat);
      
    }
  
// showPdfDownload(encodedData){
//   console.log("encodefile===>",encodedData);
//  const linkSource = 'data:application/pdf;base64,' + encodedData.coursePDF;
//       const downloadLink = document.createElement("a");
//       const fileName = encodedData.coursePDF;
//       downloadLink.href = linkSource;
//       downloadLink.download = fileName;
//       downloadLink.click();

// }
// showImageDownload(encodedData){
//   console.log("encodefile===>",encodedData);
//  const linkSource = 'data:application/image;base64,' + encodedData.courseImage;
//       const downloadLink = document.createElement("a");
//       const fileName = encodedData.courseImage;
//       downloadLink.href = linkSource;
//       downloadLink.download = fileName;
//       downloadLink.click();

// }

// previewImage(){

// }
// transform():any{
//   for(let i=0; i<this.courses.length; i++){
          
//     this.courses[i]['encodedStringImage']='data:image/jpg;base64,'+ this.courses[i]['courseImage'];
// return this.sanitizer.bypassSecurityTrustResourceUrl(this.courses[i]['encodedStringImage']);

//   }
//  console.log("encodedString====>", this.courses);
// }
}
