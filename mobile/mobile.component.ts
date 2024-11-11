import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Mobile {
  id: any | string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobiles: Mobile[] = [
    {
      name: 'iPhone',
      image: 'assets/apple.png',
      description: 'Description of Mobile 1',
      price: 399999,
      rating: 4.5,
      id: undefined
    },
    {
      name: 'Samsung',
      image: 'assets/sa.png',
      description: 'Description of Mobile 2',
      price: 69999,
      rating: 4.7,
      id: undefined
    },
    {
      name: 'OnePlus',
      image: 'assets/1+.png',
      description: 'Description of Mobile 3',
      price: 70000,
      rating: 4.6,
      id: undefined
    },
    {
      name: 'Google',
      image: 'assets/google.png',
      description: 'Description of Mobile 4',
      price: 9000,
      rating: 4.0,
      id: undefined
    },
    {
      name: 'Realme',
      image: 'assets/re.png',
      description: 'Description of Mobile 5',
      price: 89000,
      rating: 5.0,
      id: undefined
    },
  ];

  wishlist: Mobile[] = [];

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  addToCart(mobile: Mobile): void {
    console.log(`Adding ${mobile.name} to the cart`);
    // Add cart logic here
  }

  toggleWishlist(mobile: Mobile): void {
    const index = this.wishlist.indexOf(mobile);
    if (index > -1) {
      this.wishlist.splice(index, 1); // Remove from wishlist
      this.toastr.info(`${mobile.name} removed from wishlist`, 'Removed');
    } else {
      this.wishlist.push(mobile); // Add to wishlist
      this.toastr.success(`${mobile.name} added to wishlist`, 'Added');
    }
  }

  isInWishlist(mobile: Mobile): boolean {
    return this.wishlist.includes(mobile);
  }

  viewDetails(mobile: Mobile): void {
    this.router.navigate(['/mobile-details'], { state: { mobile } });
  }
}
