import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [HomeComponent, ProductPageComponent, AboutUsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule
  ]
})
export class PagesModule { }
