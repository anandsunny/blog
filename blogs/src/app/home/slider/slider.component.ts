import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageUrlArray: object[] = [
    {url: 'assets/img/slider/slider1.jpg', caption: 'The first slide'},
    {url: 'assets/img/slider/slider2.jpg', caption: 'The Second slide'},
    {url: 'assets/img/slider/slider3.jpg', caption: 'The three slide'},
    {url: 'assets/img/slider/slider4.jpg', caption: 'The four slide'}   
  ];
  constructor() { }

  ngOnInit() {}

}
