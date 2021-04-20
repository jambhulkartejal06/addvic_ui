import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from 'src/app/Model/batchPojo';
import { Course } from 'src/app/Model/course';
import { Exam } from 'src/app/Model/exam';
import { BatchService } from 'src/app/Services/batch.service';
import { CourseService } from 'src/app/Services/course.service';
import { ExamServiceService } from 'src/app/Services/exam-service.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  isEditMode:boolean;
  batchSelected: string;
  courseSelected: string;
  batches:BatchPojo[];
  courses:Course[];
  examObj=new Exam();
  public examForm: NgForm;
  constructor(private examService:ExamServiceService,private toastr: ToastrService,private batchService:BatchService,private courseservice:CourseService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.batchService.getStudentBatches().subscribe(res =>{
      console.log('response=====>',res);
      this.batches=res;
       });
       this.courseservice.getItAndMechCoursesList().subscribe(res =>{
         console.log('response====>',res);
         this.courses=res;
       })
       this.isEditMode=this.examService.getEditMode();
  console.log(this.route.snapshot.params.exam_id);
    this.examService.getCurrentExamData(this.route.snapshot.params.exam_id).subscribe((result)=>{
  //     this.examForm=  new FormGroup({ 
  //       title: new FormControl(result['title']),
  //      content: new FormControl(result['content']),
  //       username: new FormControl(result['username']),
  
   }
    )};

  onCourseSelect(event){
    this.courseSelected=event.course_id;
    console.log("===>",this.courseSelected);  
    }

     onBatchSelect(event){
      this.batchSelected=event.batch_id;
      console.log("====>",this.batchSelected);
     }
  createExam(examForm:NgForm){
    console.log("=====>",examForm.value);
    if(examForm.valid){
      this.examObj.duration=this.examObj.duration;
      this.examObj.exam_name=this.examObj.exam_name;
      this.examObj.passing_marks=this.examObj.passing_marks;
      this.examObj.course_id=this.courseSelected;
      this.examObj.batch_id=this.batchSelected;
    }
   
    this.examService.createExam(this.examObj).subscribe(res => {
      console.log('response======>', res);
  });
  this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    timeOut: 200000
  });
  examForm.reset();
}
  updateExam(){
  this.examService.updateExam(this.route.snapshot.params.exam_id,this.examForm.value).subscribe((result)=>{
  console.log(result);
  })
}

}
