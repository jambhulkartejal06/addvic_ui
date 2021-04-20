import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Email } from '../Model/email';
import { LoginService } from '../Services/login.service';
import { TermsConditionService } from '../Services/terms-condition.service';
import { OtpVerifyconditionsComponent } from '../TermsAndConditionsComponent/otp-verifyconditions/otp-verifyconditions.component';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})

export class TermsAndConditionsComponent implements OnInit {
  emailForm:string = '';
  full_name:string;
  constructor(private termsconditionservice:TermsConditionService,public dialog:MatDialog)  {
  

  }
  ngOnInit(){
    
  }
  submit(){
    
    this.termsconditionservice.setEmail(this.emailForm);
    this.termsconditionservice.sendOtp(this.emailForm,this.full_name).subscribe(res => {
      console.log('response======>', res);
    });
    this.emailForm = '';
    this.full_name = '';
    this.openDialog();
    
  }
  openDialog(): void {
      
    const dialogRef = this.dialog.open(OtpVerifyconditionsComponent, {
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


