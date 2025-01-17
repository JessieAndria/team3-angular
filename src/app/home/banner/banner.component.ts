import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slide_list = [
    {
      title:'Slide 1',
      description:'This is the first slide.',
      img: 'https://picsum.photos/900/500?random&t=6',
      img2: 'https://picsum.photos/900/500?random&t=8',
      startDate: new Date(),
      endingDate: new Date()
    },
    {
      title:'Slide 2',
      description: 'This is the second slide.',
      img: 'https://picsum.photos/900/500?random&t=7',
      img2: 'https://picsum.photos/900/500?random&t=6',
      startDate: new Date(),
      endingDate: new Date()
    },
    {
      title:'Slide 3',
      description:'This is the thirs slide.',
      img: 'https://picsum.photos/900/500?random&t=8',
      img2: 'https://picsum.photos/900/500?random&t=6',
      startDate: new Date(),
      endingDate: new Date()
    },
    {
      title:'Slide 4',
      description:'This is the fourth slide.',
      img: 'https://picsum.photos/900/500?random&t=6',
      img2: 'https://picsum.photos/900/500?random&t=6',
      startDate: new Date(),
      endingDate: new Date()
    },
  ]
  current_slide =  this.slide_list.filter( slide => (slide.startDate >= new Date() && (slide.endingDate <= new Date())))
  constructor() { }

  ngOnInit() { }

}
