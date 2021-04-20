import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Email } from '../Model/email';
import { GenerateemailService } from '../Services/generateemail.service';
import { LoginService } from '../Services/login.service';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
  }
  isShow:boolean = false;
  emailObj = new Email();
  emailForm:string = '';
  otpForm:number;
  otpnum: number;
  showOtpComponent = true;
  constructor(public dialogRef: MatDialogRef<VerifyEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData:any,private emailverifyservice:GenerateemailService,private router: Router,private toastr: ToastrService,private studentservice:StudentService) { }

  ngOnInit(): void {
    console.log("dta===>",this.DialogData);
  }
  submit() {
   
    console.log('email',this.emailForm);

    
    if(this.DialogData === 'Student'){
    this.emailverifyservice.emailVerify(this.emailForm).subscribe(res => {
      console.log('response======>', res);
      if(res.status === 'pass'){
       this.verifyotp();
       this.isShow=true;
        }else {
          this.isShow=false;
          this.router.navigate(['student/login']);
          this.toastr.success('Email has already exits!!!!!','Please login', {
            timeOut: 10000
          });
          this.dialogRef.close(false);
        }
    });
    
    }else if(this.DialogData === 'Counsellor'){
      this.emailverifyservice.staffCounsellorVerify(this.emailForm).subscribe(res => {
        console.log('response======>', res);
        if(res.status ==='Success'){
         this.verifyotp();
         this.isShow=true;
          }else{
            this.isShow=false;
            this.router.navigate(['student/login']);
            this.toastr.success('Email has already exits!!!!!','Please login', {
              timeOut: 10000
            });
            this.dialogRef.close(false);
          }
      });
    }else{
      this.emailverifyservice.staffCounsellorVerify(this.emailForm).subscribe(res => {
        console.log('response======>', res);
        if(res.status ==='Success'){
         this.verifyotp();
         this.isShow=true;
          }else{
            this.isShow=false;
            this.router.navigate(['student/login']);
            this.toastr.success('Email has already exits!!!!!','Please login', {
              timeOut: 10000
            });
            this.dialogRef.close(false); 
          }
      });
    }   
}

onOtpChange(otpp) {
  this.otpnum = otpp;
  console.log("otpnum====>",this.otpnum);
}

verifyotp(){
  
  console.log('this.otpnum------>',this.otpnum,this.emailForm);
   let temp=this.otpnum;
  this.emailverifyservice.verifyOtp(this.emailForm,temp).subscribe(res => {
    console.log('response======>', res);
     if(res.status === 'success' ){
      this.studentservice.setEditMode(false,res?.mail)
      if(this.DialogData === 'Student'){
    this.router.navigate(['student/signupnew']);
    this.dialogRef.close(false);
      }else if(this.DialogData === 'Counsellor'){
        this.router.navigate(['permit/counsellor/signup']);
        this.dialogRef.close(false);
      }else{
        this.router.navigate(['staff/signup']);
        this.dialogRef.close(false);
         }
        }else{
         this.toastr.success('Otp is invalid!!!!!','Please enter correct otp', {
          timeOut: 10000
        });
        this.dialogRef.close(false);
      } 
    });
  }

closeDialog() {
  this.dialogRef.close(false);
}
}
    