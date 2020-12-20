import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, } },
      { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, autoplay: true, } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, autoplay: true, } }
    ]
  };
  slideConfigtestimonial = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, } },
      { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, autoplay: true, } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, autoplay: true, } }
    ]
  };
  ngOnInit(): void {
  }

}
