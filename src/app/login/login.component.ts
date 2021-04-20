import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Student } from '../Model/student';
import { LoginService } from '../Services/login.service';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title='Login';
roleSelected: string;
moduleName : any[] = ['ADMIN','COUNSELLOR','STUDENT','STAFF'];
role:number;
hide = true;
  // @ViewChild('myForm',{static:false}) 
  public LoginForm: NgForm;

  // formData = {
  //   username:"",
  //   password:"",
    
  // }


// loginForm:FormGroup;
studObj = new Student();
// @Output() stud:EventEmitter<Student>=new EventEmitter();

constructor(private router: Router,private loginService:LoginService,private fb: FormBuilder,private toastr: ToastrService,private titleService: Title,
  private metaTagService: Meta,public dialog:MatDialog) { }

  
ngOnInit() {
  this.titleService.setTitle(this.title);
  this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
  this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
  this.metaTagService.updateTag(
    { name: 'description', content: 'view login page' }
  );
  
//   this.loginForm = new FormGroup({
   
//     'username':new FormControl('',[Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]+'),Validators.email,Validators.required]),
//      'password':new FormControl('',[Validators.required,
//                                   Validators.minLength(5),
//                                   Validators.maxLength(8)]),
     

//   });
  
  
 }
createLogin(LoginForm : NgForm) {

  console.log("======>",LoginForm.value);
  if(LoginForm.valid){ 
    this.studObj.username=this.studObj.username;
    this.studObj.password=this.studObj.password;
  }
  this.loginService.studentLoginCheck(this.studObj).subscribe(data1 => {
    console.log("response======>",data1);
    if(this.role == 1){
      this.router.navigate(['/studentPortal']);
    
    // this.toastr.success('Login Successfully !!!!!', 'Toastr fun!', {
    //     timeOut: 10000
    //   });
  //   this.stud.emit(data1);
    }else if(this.role == 2){
    this.router.navigate(['/staffPortal']);
    }else if(this.role == 3){
    this.router.navigate(['/sidenav']);
    }else{
    this.router.navigate(['/sidenav']);
    }

  this.toastr.success('Login Successfully !!!!!','Toastr fun!', {
    timeOut: 1000
  });
});
}
onModuleSelect(name){
this.roleSelected=name;
console.log("role===>",this.roleSelected);
}

login(LoginForm : NgForm){
  console.log("======>",LoginForm.value);
  if(LoginForm.valid){ 
    this.studObj.username=this.studObj.username;
    this.studObj.password=this.studObj.password;
    this.studObj.type=this.roleSelected;
    if(this.roleSelected==='STUDENT'){
      this.loginService.studentLoginCheck(this.studObj).subscribe(data1 => {
        
        if(data1.data==='Success'){
          this.toastr.success('Login Successfully !!!!!','Toastr fun!', {
            timeOut: 10000
          });
          this.router.navigate(['/studentPortal']);
        }else{
          this.toastr.success('Invalid Crendentials !!!!!','Please enter valid Username & Password', {
            timeOut: 10000
          });
        }
      });
      
    }else if(this.roleSelected =='CR' || this.roleSelected =='SF'){
      this.loginService.staffCounsellorLoginCheck(this.studObj).subscribe(data1 => {
        console.log("response======>",data1);
        if(data1.data ==='Success'){
          this.toastr.success('Login Successfully !!!!!','Toastr fun!', {
            timeOut: 10000
          });
          if(this.roleSelected === 'SF'){
            this.router.navigate(['/staffPortal']);
          }else{
            this.router.navigate(['/counsellorPortal']);
          }
        }else{
          this.toastr.success('Invalid Crendentials !!!!!','Please enter valid Username & Password', {
            timeOut: 10000
          });
          
        }
      });
    }else if(this.roleSelected==='ADMIN')
      this.loginService.adminLoginCheck(this.studObj).subscribe(data1 => {
        console.log("response======>",data1);
        if(data1.data==='Success'){
          this.toastr.success('Login Successfully !!!!!','Toastr fun!', {
            timeOut: 10000
          });
          this.router.navigate(['/sidenav']);
        }else{
          this.toastr.success('Invalid Crendentials !!!!!','Please enter valid Username & Password', {
            timeOut: 10000
          });
        }
      });
    }
   
    }
    // logout(){
      // this.loginService.logoutStaff().subscribe(data1 => {
      //   console.log("response======>",data1);
      //   let res=this.loginService.logoutStaff();
      //  console.log("res===>",res)
      // }
      openDialog(): void {
      
        const dialogRef = this.dialog.open(ForgotPasswordComponent, {
          disableClose: true,
          width: '300px',
          height: '400px',
          data:[]
        
        });
        console.log("dialogRef===>",dialogRef);
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        
        });
    
    }
  
   
}


