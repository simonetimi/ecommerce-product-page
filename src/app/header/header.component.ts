import { Component } from '@angular/core';

import {
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';

import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';

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
  ],
  providers: [provideIcons({ lucideShoppingCart })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menuItems = [
    { id: 0, title: 'Collections' },
    { id: 1, title: 'Men' },
    { id: 2, title: 'Women' },
    { id: 3, title: 'About' },
  ];
}
