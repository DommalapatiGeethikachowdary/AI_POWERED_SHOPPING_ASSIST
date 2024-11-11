import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Toy {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-teddy',
  templateUrl: './teddy.component.html',
  styleUrls: ['./teddy.component.scss']
})
export class TeddyComponent implements OnInit {
  toys: Toy[] = [
    {
      name: 'Teddy Bear',
      image: 'assets/teddy.png',
      description: 'Description of Toy 1',
      price: 19.99,
      rating: 4.5
    },
    {
      name: 'Car',
      image: 'assets/car.png',
      description: 'Description of Toy 2',
      price: 29.99,
      rating: 4.7
    },
    {
      name: 'Barbie Doll',
      image: 'assets/barbie.png',
      description: 'Description of Toy 3',
      price: 400.99,
      rating: 3.0
    },
    {
      name: 'Soft Toys',
      image: 'assets/softtoys.png',
      description: 'Description of Toy 4',
      price: 599.99,
      rating: 5.0
    },
    {
      name: 'Ball',
      image: 'assets/ball.png',
      description: 'Description of Toy 5',
      price: 999.99,
      rating: 4.9
    },
  ];

  wishlist: Toy[] = [];
  constructor(private toastr: ToastrService, private router:Router) {}

  ngOnInit(): void {}

  addToCart(toy: Toy): void {
    console.log(`Adding ${toy.name} to the cart`);
    // Ad
  }

  toggleWishlist(toy: Toy): void {
    const index = this.wishlist.indexOf(toy);
    if (index > -1) {
      this.wishlist.splice(index, 1); // Remove from wishlist
      this.toastr.info(`${toy.name} removed from wishlist`, 'Removed');
    } else {
      this.wishlist.push(toy); // Add to wishlist
      this.toastr.success(`${toy.name} added to wishlist`, 'Added');
    }
  }

  isInWishlist(toy: Toy): boolean {
    return this.wishlist.includes(toy);
  }

  viewDetails(teddy: Toy): void {
    this.router.navigate(['/teddy-details'], { state: { teddy } });
  }
}
