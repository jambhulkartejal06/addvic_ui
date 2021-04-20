import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TermsConditionService } from 'src/app/Services/terms-condition.service';

@Component({
  selector: 'app-otp-verifyconditions',
  templateUrl: './otp-verifyconditions.component.html',
  styleUrls: ['./otp-verifyconditions.component.css']
})
export class OtpVerifyconditionsComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
  }
  emailForm:string = '';
  otpForm:number;
  otpnum: number;
  showOtpComponent = true;
  email: any;
  constructor(private termsconditionservice:TermsConditionService,public dialogRef: MatDialogRef<OtpVerifyconditionsComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData:any) { }

  ngOnInit(): void {
    // this.termsconditionservice.getEmail();
    this.email=  this.termsconditionservice.getEmail();
    console.log("email=====>",this.email);
  }
  onOtpChange(otpp) {
    this.otpnum = otpp;
    console.log("otpnum====>",this.otpnum);
  }
  verifyotp(){
    // var formData: any = new FormData();
    // formData.append("otp", this.otpForm.get('otp').value);
   
    console.log('this.otpnum------>',this.otpnum,this.emailForm);
    this.termsconditionservice.verifyOtp(this.email,this.otpnum).subscribe(res => {
      
      console.log('response======>', res);
      
    });
    this.dialogRef.close(false);
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
