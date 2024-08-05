import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

import { BrnDialogContentDirective } from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [
    CarouselComponent,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogTitleDirective,
  ],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css',
})
export class ProductImagesComponent {}
