import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title='Services and Training |Best Information Technology';
  responsive = true;
  cols = 1;
  
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTag({name: 'author',content: 'Rajat Varade'});
    this.metaTagService.addTag({name: 'robots',content: 'index, follow'});
    this.metaTagService.updateTag(
      { name: 'description', content: 'We would be glad to provide the desired training and services to you in Information'}
    );
  }

}

