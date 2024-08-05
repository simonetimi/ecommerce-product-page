import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css',
})
export class ProductImagesComponent {
  productImages = [
    {
      id: 0,
      imgUrl: 'products/image-product-1.jpg',
      thumbnailUrl: 'products/thumbnails/image-product-1-thumbnail.jpg',
    },
    {
      id: 1,
      imgUrl: 'products/image-product-2.jpg',
      thumbnailUrl: 'products/thumbnails/image-product-2-thumbnail.jpg',
    },
    {
      id: 2,
      imgUrl: 'products/image-product-3.jpg',
      thumbnailUrl: 'products/thumbnails/image-product-3-thumbnail.jpg',
    },
    {
      id: 3,
      imgUrl: 'products/image-product-4.jpg',
      thumbnailUrl: 'products/thumbnails/image-product-4-thumbnail.jpg',
    },
  ];
  currentPicture = signal(this.productImages[0]);

  onThumbnailClick(id: number) {
    this.currentPicture.set(
      this.productImages.filter((product) => id === product.id)[0],
    );
  }
}
