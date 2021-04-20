import { Component ,OnInit, Input} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Admin } from './Model/admin';
import { Student } from './Model/student';
import { AdminService } from './Services/admin.service';
import { CanonicalService } from './Services/canonical.service';
import { StudentService } from './Services/student.service';
// import { Admin } from './admin.model';
// import { LogoutService } from './Services/logout.service';
// import { Student } from './Model/Student/student';
// import { StudentServiceService } from './Services/student-service.service';
// import { AdminService } from './Services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  // routes = this.routes;
  user=localStorage.getItem('adminData');
  stud=localStorage.getItem('studData');

  storeData=new Admin();
  storeValue=new Student();
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  
  constructor(private adminService:AdminService,private studentService:StudentService,private metaTagService: Meta,
    private canonicalService: CanonicalService){}
  

 
    
  ngOnInit() {
   
    // this.adminService.adminLoginCheck(this.user).subscribe(data => {
    // this.storeData=data;
    // });
   
    // this.studentService.studentLoginCheck(this.stud).subscribe(data1 => {
    //   this.storeValue=data1;
    //   });
    this.canonicalService.setCanonicalURL();

    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  logout(){
    localStorage.removeItem('storeData'); 
    localStorage.clear();

  }
  
  }
  