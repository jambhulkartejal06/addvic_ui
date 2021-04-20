import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../admin/generate-student/view-student/view-student.component';
import { Email } from '../Model/email';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
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
  
  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData:any,private loginService: LoginService,private router: Router)  {
    }

  ngOnInit(): void {
  
  
  }
  submit() {
   
    console.log('email',this.emailForm);
    this.loginService.setEmail(this.emailForm);
    this.loginService.sendOtp(this.emailForm).subscribe(res => {
      console.log('response======>', res);
 
    });

    this.router.navigate(["student/changePassword"]);
    this.isShow=true;
  }

  onOtpChange(otpp) {
    this.otpnum = otpp;
    console.log("otpnum====>",this.otpnum);
  }
  verifyotp(){
    // var formData: any = new FormData();
    // formData.append("otp", this.otpForm.get('otp').value);
    console.log('this.otpnum------>',this.otpnum,this.emailForm);
    let temp=this.otpnum;
  
    this.loginService.verifyOtp(this.emailForm,temp).subscribe(res => {
      
      console.log('response======>', res);
     
    });
    this.router.navigate(["student/changePassword"]);
    this.dialogRef.close(false);
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
