import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  type: string;
  contactForm: FormGroup;

  constructor(
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.event.contactUsValue.subscribe(res => {
      this.type = res;
    });
    this.formInIt();
  }
  formInIt() {
    this.contactForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      company_type: new FormControl('', Validators.required),
      company_name: new FormControl('', Validators.required),
      company_number: new FormControl('', Validators.required),
      business_number: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      catalogue: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }
}
