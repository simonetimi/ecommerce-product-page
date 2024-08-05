import { Component } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { HeaderComponent } from './header/header.component';
import { ProductPageComponent } from './product-page/product-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeComponent, HeaderComponent, ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-commerce-product-page';
}
