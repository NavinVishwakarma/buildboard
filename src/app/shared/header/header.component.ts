import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.submenu();
  }

  setValue(type) {
    this.event.setContactUstype(type);
  }
  submenu() {
    $('<span class=\'clickD\'></span>').insertAfter('.navbar-nav li.menu-item-has-children > a');
    $('.navbar-nav li .clickD').click(function(e) {
      e.preventDefault();
      const $this = $(this);

      if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
      } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
      }
    });

    $(window).on('resize', () => {
      const win = $(this); // this = window
      if (win && win.width() && win.width() < 1025) {
        $('html').click(() => {
          $('.navbar-nav li .clickD').removeClass('toggled');
          $('.toggled').removeClass('toggled');
          $('.sub-menu').removeClass('show');
        });
        $(document).click(() => {
          $('.navbar-nav li .clickD').removeClass('toggled');
          $('.toggled').removeClass('toggled');
          $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click((e) => {
          e.stopPropagation();
        });
      }
    });
  }
}
