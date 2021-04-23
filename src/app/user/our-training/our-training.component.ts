import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { Meta, Title } from '@angular/platform-browser';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-our-training',
  templateUrl: './our-training.component.html',
  styleUrls: ['./our-training.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class OurTrainingComponent implements OnInit {
  title='Best IT and Mechanical Training Institute In India.';
  responsive = true;
  cols = 1;
   current = 0
  // img_list = [
  //   "../assets/website under construction.svg", 
    // "../assets/2.svg",
    // "../assets/3.svg",
    // "../assets/4.svg"
  // ];
  // items: any;
  //  slides = [{'image':'../assets/course-1.svg'}, {'image':'../assets/course-2.svg'},{'image':'../assets/course-3.svg'}, {'image': '../assets/course-4.svg'}];
   slides=[{'image':'../assets/website under construction.svg'},{'image':'../assets/website under construction.svg'}];
  constructor(private titleService: Title,
    private metaTagService: Meta){
  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'})
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
    { name: 'description', content: 'Check here the list of available courses in the information technology and mechanical field to boost your knowledge to get your dream job.'}
    );

    // setInterval(() => {
    //   this.current = ++this.current % this.img_list.length;
    // }, 5000);
  } 
}
