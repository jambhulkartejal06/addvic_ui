import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Service } from 'src/app/Model/service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  title='Graphic Design | Logo Design | Graphic Design Services';
  panelOpenState = false;
  showMore = false;
  responsive = true;
  cols = 1;
  serviceObj = new Service();
  serviceNameSelected: any= [];
  serviceList = new FormControl();
  finalServiceName : string;
  public serviceForm: NgForm;
  services: any[] = [ 
 
  {services:'UI/UX Design'},
  {services:'Logo Design'},
  {services:'Brand Design'},
  {services:'Print Design'}, 
  {services:'Product Design'},
  {services:'Art and Illustration'}


];

  constructor(private servicesService:ServiceService,private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.servicesService.getAllService().subscribe(res => {
      console.log('courses======>', res);
      // this.services = res;
  });
  this.titleService.setTitle(this.title);
  this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
  this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
  this.metaTagService.updateTag(
    { name: 'description', content: 'In this time of competition your business needs marketing and advertising with creative Logo Design, Brand Design, Product Design, Art and Illustration. We are always there to help you out.'}
  );
}
submit(serviceForm : NgForm){    
  console.log("tarining===>",this.serviceObj);
  if(serviceForm.valid){ 
    this.serviceObj.fullName=this.serviceObj.fullName;
    this.serviceObj.email=this.serviceObj.email;
    this.serviceObj.mobile=this.serviceObj.mobile;
    this.serviceObj.serviceName=this.finalServiceName;
    console.log("#####################",this.finalServiceName);
  }
  this.servicesService.addService(this.serviceObj).subscribe(data1 => {
    console.log("response======>",data1);
});

}
selectService(event) {
   this.serviceNameSelected.push(event.services);
  console.log("event====>",event)
  console.log("service name====>",this.serviceNameSelected)
  this.finalServiceName = this.serviceNameSelected.toString();
console.log("final name=====>",this.finalServiceName)
}

}


  

