import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

interface Dress {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.scss']
})
export class DressComponent implements OnInit {
  dresses: Dress[] = [
    {
      name: 'Summer Dress',
      image: 'assets/s.png',
      description: 'Description of Dress 1',
      price: 499,
      rating: 4.2
    },
    {
      name: 'Winter Dress',
      image: 'assets/ja.png',
      description: 'Description of Dress 2',
      price: 799,
      rating: 4.9
    },
    {
      name: 'Nightwear',
      image: 'assets/night.png',
      description: 'Description of Dress 3',
      price: 567,
      rating: 5.0
    },
    {
      name: 'Partywear',
      image: 'assets/party.png',
      description: 'Description of Dress 4',
      price: 900,
      rating: 4.8
    },
    {
      name: 'Wedding Dress',
      image: 'assets/wedding.png',
      description: 'Description of Dress 5',
      price: 1000,
      rating: 3.8
    },
  ];

  wishlist: Dress[] = [];
  searchQuery: string = '';
  filteredDresses: Dress[] = [...this.dresses];

  constructor(private toastr: ToastrService, private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {}

  addToCart(dress: Dress): void {
    console.log(`Adding ${dress.name} to the cart`);
    // Add cart logic here
  }

  toggleWishlist(dress: Dress): void {
    const index = this.wishlist.indexOf(dress);
    if (index > -1) {
      this.wishlist.splice(index, 1); // Remove from wishlist
      this.toastr.info(`${dress.name} removed from wishlist`, 'Removed');
    } else {
      this.wishlist.push(dress); // Add to wishlist
      this.toastr.success(`${dress.name} added to wishlist`, 'Added');
    }
  }

  isInWishlist(dress: Dress): boolean {
    return this.wishlist.includes(dress);
  }

  onSearch() {
    this.filteredDresses = this.dresses.filter(dress =>
      dress.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewDetails(dress: Dress): void {
    this.router.navigate(['/details'], { state: { dress} });
  }
}
