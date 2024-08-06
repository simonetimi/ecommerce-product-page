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
  // cart management
  productsService = inject(ProductsService);
  itemsInCart = this.productsService.itemsInCart;
  removeFromCart(id: string) {
    this.productsService.removeProductFromCart(id);
  }

  // theme management
  currentTheme = signal<'system' | 'light' | 'dark' | null>(null);

  ngOnInit() {
    // reads from local storage
    const current = localStorage.getItem('theme');
    // type check
    if (current !== 'light' && current !== 'dark' && current !== 'system') {
      return;
    }
    // sets the correct value on the signal and the correct class on the DOM
    this.updateTheme(current);
    // listen for system color scheme changes (add event listener 'change' on matchMedia)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (this.currentTheme() === 'system') {
          this.updateTheme('system');
        }
      });
  }

  private updateTheme(theme: 'system' | 'light' | 'dark' | null) {
    // update signal
    if (theme === 'system' || !theme) {
      this.currentTheme.set('system');
    } else if (theme === 'dark') {
      this.currentTheme.set('dark');
    } else if (theme === 'light') {
      this.currentTheme.set('light');
    }
    // Update the HTML document class
    document.documentElement.classList.toggle(
      'dark',
      this.currentTheme() === 'dark' ||
        (this.currentTheme() === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }

  toggleTheme() {
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
    // calls updateTheme to update the dom when users changes the theme manually
    this.updateTheme(newTheme);
  }

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

  menuItems = [
    { id: 0, title: 'Collections' },
    { id: 1, title: 'Men' },
    { id: 2, title: 'Women' },
    { id: 3, title: 'About' },
    { id: 4, title: 'Contact' },
  ];
}
