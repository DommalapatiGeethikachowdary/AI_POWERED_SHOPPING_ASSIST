import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
export interface HomeItem {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-homeitems',
  templateUrl: './homeitems.component.html',
  styleUrls: ['./homeitems.component.scss']
})
export class HomeitemsComponent implements OnInit {
  homeItems: HomeItem[] = [
    {
      name: 'Couch',
      image: 'assets/couch.png',
      description: 'Description of Home Item 1',
      price: 11149.99,
      rating: 4.0
    },
    {
      name: 'Nonstick',
      image: 'assets/non.png',
      description: 'Description of Home Item 2',
      price: 2999.99,
      rating: 4.5
    },
    {
      name: 'Stationary',
      image: 'assets/cli.png',
      description: 'Description of Home Item 3',
      price: 3000.99,
      rating: 4.7
    },
    {
      name: 'Bed Pillow',
      image: 'assets/bed.png',
      description: 'Description of Home Item 4',
      price: 120.99,
      rating: 4.2
    },
    {
      name: 'Small Kitchen Appliances',
      image: 'assets/small.png',
      description: 'Description of Home Item 5',
      price: 1234.99,
      rating: 4.1
    },
  ];

  wishlist: HomeItem[] = [];

  constructor(private toastr: ToastrService,private router:Router) {}

  ngOnInit(): void {}

  addToCart(item: HomeItem): void {
    console.log(`Adding ${item.name} to the cart`);
    // Add cart logic here
  }

  toggleWishlist(item: HomeItem): void {
    const index = this.wishlist.indexOf(item);
    if (index > -1) {
      this.wishlist.splice(index, 1); // Remove from wishlist
      this.toastr.info(`${item.name} removed from wishlist`, 'Removed');
    } else {
      this.wishlist.push(item); // Add to wishlist
      this.toastr.success(`${item.name} added to wishlist`, 'Added');
    }
  }

  isInWishlist(item: HomeItem): boolean {
    return this.wishlist.includes(item);
  }
  
  viewDetails(homeItem: HomeItem): void {
    this.router.navigate(['/home-item-detail'], { state: { homeItem } });
  }
}
