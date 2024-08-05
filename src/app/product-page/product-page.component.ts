import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductDetailsComponent, ProductImagesComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {}
