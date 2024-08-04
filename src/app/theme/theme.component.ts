import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './theme.component.html',
})
export class ThemeComponent {
  changeTheme(theme: string): void {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.remove('dark');
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage['theme'] = 'dark';
        break;
      case 'light':
        document.documentElement.classList.add('light');
        localStorage['theme'] = 'light';
        break;
      default:
        document.documentElement.classList.add(
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
        );
        delete localStorage['theme'];
        break;
    }
  }
}
