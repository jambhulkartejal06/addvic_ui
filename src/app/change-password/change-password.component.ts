import { Component, OnInit } from '@angular/core';
import { Email } from '../Model/email';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl:'./change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  emailObj = new Email();
  passwordForm:string = '';
  email: any;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getEmail().subscribe(email =>  this.email=email);
  }
  submit() {
    this.loginService.changePassword(this.email,this.passwordForm).subscribe(res => {
      console.log('response======>', res);
    });
}
}
