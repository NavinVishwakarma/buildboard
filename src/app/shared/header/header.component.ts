import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(() => {
      const scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $('.main-head').addClass('black');
      } else {
        $('.main-head').removeClass('black');
      }
    });
  }
}
