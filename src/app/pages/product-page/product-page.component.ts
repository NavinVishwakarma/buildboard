import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productList: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.api.get('user/products').subscribe((res: any) => {
      if (res.success) {
        if (res.data.length > 0) {
          this.productList = res.data;
        } else {
          this.productList = undefined;
        }
      } else {
        this.productList = undefined;
      }
    });
  }
}
