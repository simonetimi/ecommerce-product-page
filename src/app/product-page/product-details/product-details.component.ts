import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

import { provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';

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
  items = signal(1);
  onChangeNumber(modifier: string) {
    if (modifier === 'add') {
      if (this.items() === 99) return;
      this.items.update((prevState) => prevState + 1);
    } else if (modifier === 'sub') {
      if (this.items() === 1) return;
      this.items.update((prevState) => prevState - 1);
    }
  }
}
