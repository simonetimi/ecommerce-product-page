import { Component, computed, inject, signal } from '@angular/core';

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
import {
  lucideShoppingCart,
  lucideMenu,
  lucideTrash2,
  lucideSunMoon,
  lucideSun,
  lucideMoon,
} from '@ng-icons/lucide';
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
  providers: [
    provideIcons({
      lucideShoppingCart,
      lucideMenu,
      lucideTrash2,
      lucideSunMoon,
      lucideSun,
      lucideMoon,
    }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  productsService = inject(ProductsService);
  currentTheme = signal<'system' | 'light' | 'dark' | null>(null);
  // compute icon name depending on current theme
  getThemeIconName = computed(() => {
    if (this.currentTheme() === 'light') {
      return 'lucideSun';
    } else if (this.currentTheme() === 'dark') {
      return 'lucideMoon';
    } else {
      return 'lucideSunMoon';
    }
  });
  itemsInCart = this.productsService.itemsInCart;

  removeFromCart(id: string) {
    this.productsService.removeProductFromCart(id);
  }

  ngOnInit() {
    // reads from local storage
    const current = localStorage.getItem('theme');
    if (current === 'system') {
      this.currentTheme.set('system');
      if (window.matchMedia('(prefers-color-scheme: dark)')) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (current === 'light') {
      this.currentTheme.set('light');
      document.documentElement.classList.remove('dark');
    } else if (current === 'dark') {
      this.currentTheme.set('dark');
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    // cycles through the 3 modes and sets local storage
    let newTheme: 'light' | 'dark' | 'system';
    if (this.currentTheme() === 'system' || !this.currentTheme()) {
      newTheme = 'light';
    } else if (this.currentTheme() === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = 'system';
    }
    this.currentTheme.set(newTheme);
    localStorage.setItem('theme', newTheme);

    // Update the HTML document class
    // if theme is dark or if theme is system and system is set to dark, set document to dark, else remove dark
    if (
      newTheme === 'dark' ||
      (newTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  menuItems = [
    { id: 0, title: 'Collections' },
    { id: 1, title: 'Men' },
    { id: 2, title: 'Women' },
    { id: 3, title: 'About' },
    { id: 4, title: 'Contact' },
  ];
}
