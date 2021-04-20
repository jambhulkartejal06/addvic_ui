import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { OurTraining } from 'src/app/Model/training';
import { CategoryService } from 'src/app/Services/category.service';
import { CourseService } from 'src/app/Services/course.service';
import { TrainingService } from 'src/app/Services/training.service';
import { saveAs } from 'file-saver';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/admin/generate-student/view-student/view-student.component';
@Component({
  selector: 'app-it-courses',
  templateUrl: './it-courses.component.html',
  styleUrls: ['./it-courses.component.css']
})
export class ItCoursesComponent implements OnInit {
  title='Information Technology Courses';
  fileUrl;
  public trainingForm: NgForm;
  trainingObj = new OurTraining();
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
  user = new Array(new Category());
  dropdowncat= [];
  selectedCategories = [];
  categories=[];
  courses:any=[];
  noCoursesFound:string='';
  flag:boolean=false;
  encodedStringImage;
  img: any;
  
  slides = [{'image':'../assets/course-1.svg'}, {'image': '../assets/course-2.svg'},{'image': '../assets/course-3.svg'}, {'image': '../assets/course-4.svg'}];
  constructor(private trainingservice:TrainingService,private courseService:CourseService,private categoryservice:CategoryService,private sanitizer: DomSanitizer,private http:HttpClient,public dialog: MatDialog,private titleService: Title,
    private metaTagService: Meta) { }
  
    ngOnInit(): void {
        
      this.titleService.setTitle(this.title);
      this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
      this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
      this.metaTagService.updateTag(
        { name: 'description', content: 'Information Technology is an excellent choice to help advance your career. We teach you major topics including Web Design, Graphic Design, Digital Marketing, etc. Then, why you wait? Start learning now!' }
      );

      this.courseService.getAllItCourses().subscribe(res => {
        console.log('courses======>', res);
        this.courses = res;
        for(let i=0; i<this.courses.length; i++){
          
          this.courses[i]['encodedStringImage']='data:image/jpg;base64,'+ this.courses[i]['courseImage'];
        }
        console.log("encodeImage====>",this.courses);
    
    });
    this.categoryservice.getItCategoryName().subscribe(res => {
      console.log('response======>', res);
      this.categories = res;
    });
  
    const data = 'eJwrzs9NVShJrSgBABHoA5o=';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
     
  }
  openDialog(encodedDataImage): void {
    this.encodedStringImage='data:/image/jpg+xml;base64,'+ encodedDataImage.courseImage;
    console.log("encodedStringimage====>",this.encodedStringImage);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      height: '300px',
      data: {img: this.encodedStringImage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.img = result;
    });
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

    console.log("finalCourse=====>",this.finalCourseName);
    console.log('selected courses', this.selectedCourses);
  
  }
  
    send(trainingForm : NgForm){
      
      console.log("tarining===>",this.trainingObj);
      if(trainingForm.valid){ 
        this.trainingObj.fullName=this.trainingObj.fullName;
        this.trainingObj.email=this.trainingObj.email;
        this.trainingObj.mobile=this.trainingObj.mobile;
        this.trainingObj.itEnrollmentInterest=this.finalCourseName;
        console.log("#####################",this.selectedCourseName);
      }
      this.trainingservice.createItTraining(this.trainingObj).subscribe(data1 => {
        console.log("response======>",data1);
  });

  
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
      this.courseService.itCourseByCategory(value.category).subscribe(res =>{
        console.log('course by id======>', res);
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
        tempArray = this.courses.filter(i => i.categories.cat_id === item.cat_id);
        this.dropdowncat.push(tempArray);
      });
    
      console.log("dropdowncategory====>",this.dropdowncat);
      
    }
 
  showPdfDownload(encodedData){
    console.log("encodefile===>",encodedData);
   const linkSource = 'data:application/pdf;base64,' + encodedData.coursePDF;
        const downloadLink = document.createElement("a");
        const fileName = encodedData.coursePDF;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();

  }

}
  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    styleUrls: ['./dialog-overview-example-dialog.css']
  })
  export class DialogOverviewExampleDialog {
    encodedStringImage;
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,private sanitizer: DomSanitizer) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    transform():any{
      console.log("data======>",this.data);
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.data['img']);
     
    }
    closeDialog(){
      this.dialogRef.close(false);
      }
  
  }
