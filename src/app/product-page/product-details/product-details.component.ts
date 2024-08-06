import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

import { provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { ProductsService } from '../../products.service';
import { Product } from '../../placeholder-data';

import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    HlmBadgeDirective,
    HlmButtonDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideShoppingCart })],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productsService = inject(ProductsService);
  currentProduct = input.required<Product>();

  quantity = signal(1);
  onChangeNumber(modifier: string) {
    if (modifier === 'add') {
      if (this.quantity() === 99) return;
      this.quantity.update((prevState) => prevState + 1);
    } else if (modifier === 'sub') {
      if (this.quantity() === 1) return;
      this.quantity.update((prevState) => prevState - 1);
    }
  }

  onAddToCart() {
    this.productsService.addProductToCart(
      this.currentProduct(),
      this.quantity(),
    );
    toast(`${this.quantity() === 1 ? 'Item' : 'Items'} added to cart!`);
    this.quantity.set(1);
  }
}
