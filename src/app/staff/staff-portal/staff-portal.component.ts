import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-portal',
  templateUrl: './staff-portal.component.html',
  styleUrls: ['./staff-portal.component.css']
})
export class StaffPortalComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createBlog(){
    this.router.navigate(["createblog"])
  }
  createStudentAttendence(){
    this.router.navigate(["student/attendance"])
  }
  viewStudentAttendence(){
    this.router.navigate(["viewStudentAttendence"])
  }
  viewBlog(){
    this.router.navigate(["viewBlog"])
  }
  viewStudent(){
    this.router.navigate(["students"])
  }
  viewCourse(){
    this.router.navigate(["courses"]);
  }
  viewCertificate(){
  this.router.navigate(["certificates"])
}
}



