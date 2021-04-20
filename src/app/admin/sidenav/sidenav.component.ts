import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPostService } from 'src/app/Services/add-post.service';
import { CounsellorService } from 'src/app/Services/counsellor.service';
import { StudentService } from 'src/app/Services/student.service';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  type: string ='';
  constructor(private router: Router,private counsellorService:CounsellorService,private studentservice:StudentService,private addPostService:AddPostService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  createCertificate(){
    this.router.navigate(["create/certificate"]);
  }
  generateStudents(){
    this.type='Student'
    this.openDialog();
    
    this.studentservice.setEditMode(false);
    // this.router.navigate(["student/signupnew"]);
  }
  generateFaculty(){
    this.type='Staff'
    this.openDialog();
    // this.router.navigate(["staff/signup"]);
  }
  generateCounsellor(){
    this.type='Counsellor'
    this.openDialog();
    this.counsellorService.setEditMode(false);
    // this.router.navigate(["permit/counsellor/signup"]);

   }
  generateITCategory(){
    this.router.navigate(["itcategory/create"])
  }
  generateMechCategory(){
    this.router.navigate(["category/create"])
  }
  generateITCourses(){
    this.router.navigate(["itcourses/create"])
  }
  generateMechCourses(){
    this.router.navigate(["course/create"])
  }

  generateMarketingDesignCategory(){
    this.router.navigate(["graphic/create"])
  }

  generateMarketingDesignCourse(){
    this.router.navigate(["graphic/make"])
  }
  generateMarketingDesignEnrollmentInterest(){
    this.router.navigate(["graphic/service"])
  }
  generateInternshipCategory(){
    this.router.navigate(["internship/category/create"])
  }
  generateInternshipCourse(){
    this.router.navigate(["internship/course/create"])
  }
  generateInternshipEnrollmentInterest(){
    this.router.navigate(["intern/service"])
  }

viewMarketingDesignCategory(){
  this.router.navigate(["graphic/categories"])
}
viewMarketingDesignCourse(){
  this.router.navigate(["graphic/allcourses"])
}
viewMarketingDesignEnrollmentInterest(){
  this.router.navigate(["graphic/services"])
}
viewInternshipCategory(){
  this.router.navigate(["internship/categories"])
}
viewInternshipCourse(){
  this.router.navigate(["internship/allcourses"])
}
viewInternshipEnrollmentInterest(){
  this.router.navigate(["intern/get/trainers"])
}












  createDesignation(){
    this.router.navigate(["create/designation"])
  }
  createStudentAttendence(){
    this.router.navigate(["student/attendance"])
  }
  
  viewStudentAttendence(){
    this.router.navigate(["viewStudentAttendence"])
  }
  createBlog(){
    this.addPostService.setEditMode(false);
    this.router.navigate(["createblog"])
  }
  viewBlog(){
    this.router.navigate(["viewBlog"])
  }

  viewBatches(){
    this.router.navigate(["batches"]);
}
viewContact(){
  this.router.navigate(["feedbacks"]);
}
viewMechCategory(){
  this.router.navigate(["categories"]);
}
viewITCategory(){
  this.router.navigate(["itcategories"]);
}

viewHiring(){
  this.router.navigate(["forms"])
}
viewFeedback(){
  this.router.navigate(["feedbacks"])
}
viewDesignation(){
  this.router.navigate(["designations"])
}
viewCertificate(){
  this.router.navigate(["certificates"])
}
viewStudent(){
  this.router.navigate(["students"])
}
viewService(){
  this.router.navigate(["services"])
}
viewCounsellor(){
  this.router.navigate(["users"])
}
viewMechanicalCourses(){
  this.router.navigate(["mechanical/allcourses"])
}
viewITCourses(){
  this.router.navigate(["itallcourses"])
}
viewITTrainers(){
  this.router.navigate(["get/ittrainers"])
}
viewMechTrainers(){
  this.router.navigate(["get/trainers"])
}
 openDialog(): void {
      
    const dialogRef = this.dialog.open(VerifyEmailComponent, {
      disableClose: true,
      width: '300px',
      height: '400px',
      data: this.type
    
    });
    console.log("dialogRef===>",dialogRef);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  
  }
}
