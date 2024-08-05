import { Component, inject, signal } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductDetailsComponent, ProductImagesComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  productsService = inject(ProductsService);
  productId = signal('1');
  product = this.productsService.getProduct(this.productId());
}
