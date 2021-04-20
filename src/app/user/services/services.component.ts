import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Service } from 'src/app/Model/service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
//   serviceObj = new Service();
//   serviceNameSelected: any= [];
//   serviceList = new FormControl();
//   finalServiceName : string;
//   public serviceForm: NgForm;
//   services: any[] = [ 
//   {services:'Android App'},
//   {services:'IOS'},
//   {services:'Ecommerce Website'},
//   {services:'Static Website'},
//   {services:'Dynamic Website'},
//   {services:'UI/UX Design'},
//   {services:'Logo Design'},
//   {services:'Brand Design'},
//   {services:'Print Design'}, 
//   {services:'Product Design'},
//   {services:'Art and Illustration'},
//   {services:'Marketing Strategies'},
//   {services:'Search Engine Optimization'},
//   {services:'Keyword Research'},
//   {services:'Social Media Marketing'},
//   {services:'Industrial Design'},
//   {services:'CAD Design'},
//   {services:'Engineering Analysis'},
//   {services:'Prototype modelling and 3D printing'},
//   {services:'Research and Development'},
//   {services:'Tooling Design'},
//   {services:'Concept Design'},
//   {services:'Design for Patent'},
//   {services:'Assistance for students’ projects'},

// ];

  constructor(private servicesService:ServiceService) { }

  ngOnInit(): void {
    // this.servicesService.getAllService().subscribe(res => {
    //   console.log('services======>', res);
      // this.services = res;
  // });

}
// submit(serviceForm : NgForm){    
//   console.log("tarining===>",this.serviceObj);
//   if(serviceForm.valid){ 
//     this.serviceObj.fullName=this.serviceObj.fullName;
//     this.serviceObj.email=this.serviceObj.email;
//     this.serviceObj.mobile=this.serviceObj.mobile;
//     this.serviceObj.serviceName=this.finalServiceName;
//     console.log("#####################",this.finalServiceName);
//   }
//   this.servicesService.addService(this.serviceObj).subscribe(data1 => {
//     console.log("response======>",data1);
// });

}
// selectService(event) {
//    this.serviceNameSelected.push(event.services);
//   console.log("event====>",event)
//   console.log("service name====>",this.serviceNameSelected)
//   this.finalServiceName = this.serviceNameSelected.toString();
// console.log("final name=====>",this.finalServiceName)
// }


