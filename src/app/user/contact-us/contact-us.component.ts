import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, NgForm  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/Model/contactUs';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { trigger, transition, animate, style } from '@angular/animations'
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title='Contact Us';
public contactForm: NgForm;
conObj=new ContactUs();
// public map: any = { lat: 51.678418, lng: 7.809007 };
  location = {
  phoneNumber: 18002671818,
  }
  responsive = true;
  cols = 1;
  current = 0
  constructor( private contactusService: ContactUsService,private toastr: ToastrService,private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'Our contact us page finds just the right balance between making it easy to reach the company and we help the students and customers find what they need.'}
    );
}
  send(contactForm : NgForm){
    console.log("======>",contactForm.value);
    if(contactForm.valid){ 
      this.conObj.fullName=this.conObj.fullName;
      this.conObj.email=this.conObj.email;
      this.conObj.mobileNumber=this.conObj.mobileNumber;
      this.conObj.message=this.conObj.message;
    }
    this.contactusService.createContact(this.conObj).subscribe(data1 => {
      console.log("response======>",data1);
});
this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
  timeOut: 200000
});
contactForm.resetForm();

}
// longitude = 20.728218;
// latitude = 52.128973;

// markers = [
// { latitude: 52.228973, longitude: 20.728218 }
// ];

// placeMarker(position: any) {
// const lat = position.coords.lat;
// const lng = position.coords.lng;

// this.markers.push({ latitude: lat, longitude: lng });
// }

// }
}
