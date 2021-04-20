import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounsellorService } from 'src/app/Services/counsellor.service';
import { LoginService } from 'src/app/Services/login.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-counsellor-portal',
  templateUrl: './counsellor-portal.component.html',
  styleUrls: ['./counsellor-portal.component.css']
})
export class CounsellorPortalComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  isAdd:boolean = false;
  constructor(private router: Router,private loginService:LoginService,private studentservice:StudentService) { }

  ngOnInit(): void {
  }
  createCertificate(){
    this.router.navigate(["create/certificate"]);
  }
  createDesignation(){
    this.router.navigate(["create/designation"])
  }
  generateBatches(){
    this.router.navigate(["batches"])
  }
  generateITCategory(){
    this.router.navigate(["itCategory/create"])
  }
  generateMechCategory(){
    this.router.navigate(["category/create"])
  }
  generateITCourses(){
    this.router.navigate(["itCourses/create"])
  }
  generateMechCourses(){
    this.router.navigate(["course/create"])
  }
  generateStudents(){
    this.studentservice.setEditMode(true);
    this.router.navigate(["student/signupnew"]);
  }
  createBlog(){
    this.router.navigate(["createblog"])
  }
  
  // generateFaculty(){
  //   this.router.navigate(["staff/signup"]);
  // }
 
  viewBatches(){
    this.router.navigate(["batches"]);
}
viewMechCategory(){
  this.router.navigate(["categories"]);
}
viewITCategory(){
  this.router.navigate(["itcategories"]);
}
viewCertificate(){
  this.router.navigate(["certificates"])
}
viewContact(){
  this.router.navigate(["feedbacks"]);
}
  viewCourse(){
    this.router.navigate(["courses"]);
  }
  viewDesignation(){
    this.router.navigate(["designations"])
  }
viewFeedback(){
  this.router.navigate(["feedbacks"])
}
viewStudent(){
  this.router.navigate(["students"])
}
viewHiring(){
  this.router.navigate(["forms"])
}
viewITTrainers(){
  this.router.navigate(["get/ittrainers"])
}
viewMechTrainers(){
  this.router.navigate(["get/trainers"])
}
logout(){
  let res=this.loginService.logoutStaff();
  console.log("res===>",res)
 this.router.navigate(["student/login"])
}
}

