import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  type: string;
  contactForm: FormGroup;
  catalogue: File;
  companyType: any;

  constructor(
    private event: EventService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.formInIt();
    this.companyTypedata();
    this.event.contactUsValue.subscribe(res => {
      this.type = res;
      if (res === 'Partner') {
        this.contactForm.get('mobile').setValidators([Validators.required]);
        this.contactForm.get('pincode').setValidators([Validators.required]);
        this.contactForm.get('city').setValidators([Validators.required]);
        this.contactForm.get('zipcode').setValidators([Validators.required]);
        this.contactForm.get('company_type').setValidators([Validators.required]);
        this.contactForm.get('company_name').setValidators([Validators.required]);
        this.contactForm.get('company_number').setValidators([Validators.required]);
        this.contactForm.get('gst').setValidators([Validators.required]);
        this.contactForm.get('business_number').setValidators([Validators.required]);
        this.contactForm.updateValueAndValidity();
      } else {
        console.log('asasasd');
        this.contactForm.get('mobile').clearValidators();
        this.contactForm.get('mobile').updateValueAndValidity();
        this.contactForm.get('pincode').clearValidators();
        this.contactForm.get('pincode').updateValueAndValidity();
        this.contactForm.get('city').clearValidators();
        this.contactForm.get('city').updateValueAndValidity();
        this.contactForm.get('zipcode').clearValidators();
        this.contactForm.get('zipcode').updateValueAndValidity();
        this.contactForm.get('company_type').clearValidators();
        this.contactForm.get('company_type').updateValueAndValidity();
        this.contactForm.get('company_name').clearValidators();
        this.contactForm.get('company_name').updateValueAndValidity();
        this.contactForm.get('company_number').clearValidators();
        this.contactForm.get('company_number').updateValueAndValidity();
        this.contactForm.get('gst').clearValidators();
        this.contactForm.get('gst').updateValueAndValidity();
        this.contactForm.get('business_number').clearValidators();
        this.contactForm.get('business_number').updateValueAndValidity();
      }
    });
  }
  companyTypedata() {
    this.companyType = [
      { name: 'Individual' },
      { name: 'Sole Proprietorship Concern' },
      { name: 'Partnership Firm – registered / unregistered.' },
      { name: 'One Person Company.' },
      { name: 'Private Company.' },
      { name: 'Public Limited Company – Unlisted & Listed.' }, { name: 'Limited Liability Partnership.' },
      { name: 'Hindu Undivided Family (HUF)' }, { name: 'Foreign Company.' },
      { name: 'Trust' }];
  }
  formInIt() {
    this.contactForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]),
      mobile: new FormControl('', [Validators.required]),
      pincode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      company_type: new FormControl('', Validators.required),
      company_name: new FormControl('', Validators.required),
      company_number: new FormControl('', Validators.required),
      business_number: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      catelog: new FormControl(''),
      description: new FormControl('', Validators.minLength(10))
    });
  }
  uploadDocumentInsuranceInit(e) {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].type === 'application/pdf') {
        let ftu;
        ftu = e.target.files[0];
        this.contactForm.patchValue({ catelog: ftu });
      } else {
        this.api.alert('Please Upload only pdf file', 'warning');
      }
    }
  }
  submit(formvalue) {
    if (this.contactForm.valid) {
      let api;
      const data = new FormData();
      data.append('first_name', formvalue.first_name);
      data.append('last_name', formvalue.last_name);
      data.append('email', formvalue.email);
      if (this.type === 'Partner') {
        data.append('mobile', formvalue.mobile);
        data.append('pincode', formvalue.pincode);
        data.append('city', formvalue.city);
        data.append('zipcode', formvalue.zipcode);
        data.append('company_type', formvalue.company_type);
        data.append('company_name', formvalue.company_name);
        data.append('company_number', formvalue.company_number);
        data.append('business_number', formvalue.business_number);
        data.append('gst', formvalue.gst);
        data.append('catelog', formvalue.catelog);
      }

      data.append('description', formvalue.description);
      if (this.type === 'Partner') {
        api = 'user/partner';
      } else {
        api = 'user/contact-us';
      }

      this.api.postMultiData(api, data).subscribe((res => {
        if (res.success) {
          this.api.alert(res.message, 'success');
          this.contactForm.reset();
        } else {
          this.api.alert(res.message, 'warning');
        }
      }));
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
