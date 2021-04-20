
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  trigger('fade', [
      transition('void => *', [style({ opacity: 0 })]),
      transition('* => void', [style({ opacity: 1 })]),
    ])
  ]
})
export class HomeComponent implements OnInit {
  title = 'Home';
  responsive = true;
  cols = 1;
   current = 0
  img_list = [
    "../assets/1.svg", 
    "../assets/2.svg",
    "../assets/3.svg",
    "../assets/4.svg"
  ];
  // items: any;

  constructor(private titleService: Title,
    private metaTagService: Meta){
  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'rsgitech'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add home template' }
    );
    

    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 5000);
  } 
}

  

