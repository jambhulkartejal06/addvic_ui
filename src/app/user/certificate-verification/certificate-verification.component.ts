import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { KeyValue } from '@angular/common';
import { AdminCertificate } from 'src/app/Model/adminCertificate';
import { AdminService } from 'src/app/Services/admin.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-certificate-verification',
  templateUrl: './certificate-verification.component.html',
  styleUrls: ['./certificate-verification.component.css']
})
export class CertificateVerificationComponent implements OnInit {
  title='Verify Certificate | Certificate Verification';
  responsive = true;
  cols = 1;
  
  centerObj = new AdminCertificate();
  user = new Array(new AdminCertificate());
  data: AdminCertificate ;
  openform: boolean = false;
  username: any;

  constructor(private adminService: AdminService,private titleService: Title,
    private metaTagService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'view certificate page' }
    );
    // this.candidate_details=this.adminService.getCandidate();
    // this.candidates1=Object.keys(this.candidate_details[0]);
    // console.log("============>",this.candidates1);
  }

  searchById(username) {
    this.adminService.getByCertificateVerificationNumber(username).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
        this.onClickOpenForm();
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickOpenForm() {
    this.openform = true;
    
  }
  originalOrder = (user): number => {
    return 0;
}
}
