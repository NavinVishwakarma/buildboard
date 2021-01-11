import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProductPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsAndConditionComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
