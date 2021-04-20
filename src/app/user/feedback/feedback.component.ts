import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/Model/contactUs';
import { ContactUsService } from 'src/app/Services/contact-us.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  title='Feedback | Feedback Form';
  public feedbackForm: NgForm;
  feedbackObj=new ContactUs();
  responsive = true;
  cols = 1;
  
  constructor(private contactusService: ContactUsService,private toastr: ToastrService,private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'A feedback form is a way in which students feedback is obtained. Your Feedback helps improve our products and services.'}
    );
}
  
  send(feedbackForm : NgForm){
    console.log("======>",feedbackForm.value);
    if(feedbackForm.valid){ 
      this.feedbackObj.fullName=this.feedbackObj.fullName;
      this.feedbackObj.email=this.feedbackObj.email;
      this.feedbackObj.mobileNumber=this.feedbackObj.mobileNumber;
      this.feedbackObj.message=this.feedbackObj.message;
    }
    this.contactusService.createContact(this.feedbackObj).subscribe(data1 => {
      console.log("response======>",data1);
});

feedbackForm.resetForm();
this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
  timeOut: 100000
});
}
}

