import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

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
