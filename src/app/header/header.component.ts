import { Component, inject } from '@angular/core';

import {
  BrnSheetContentDirective,
  BrnSheetTriggerDirective,
} from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
} from '@spartan-ng/ui-sheet-helm';
import {
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import {
  HlmPopoverCloseDirective,
  HlmPopoverContentDirective,
} from '@spartan-ng/ui-popover-helm';

import { provideIcons } from '@ng-icons/core';
import { lucideShoppingCart, lucideMenu, lucideTrash2 } from '@ng-icons/lucide';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../ui/logo/logo.component';

@Component({
  standalone: true,
  selector: 'header[appHeader]',
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    HlmIconComponent,
    BrnPopoverCloseDirective,
    BrnPopoverComponent,
    BrnPopoverContentDirective,
    BrnPopoverTriggerDirective,
    HlmPopoverCloseDirective,
    HlmPopoverContentDirective,
    BrnSheetContentDirective,
    BrnSheetTriggerDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    CommonModule,
    LogoComponent,
  ],
  providers: [provideIcons({ lucideShoppingCart, lucideMenu, lucideTrash2 })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  productsService = inject(ProductsService);
  itemsInCart = this.productsService.itemsInCart;

  removeFromCart(id: string) {
    this.productsService.removeProductFromCart(id);
  }

  menuItems = [
    { id: 0, title: 'Collections' },
    { id: 1, title: 'Men' },
    { id: 2, title: 'Women' },
    { id: 3, title: 'About' },
    { id: 4, title: 'Contact' },
  ];
}
