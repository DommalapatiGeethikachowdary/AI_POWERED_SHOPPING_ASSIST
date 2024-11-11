import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Country {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  countries: Country[] = [
    {
      name: 'France',
      image: 'assets/france.png',
      description: 'Description of France',
      price: 5000000,
      rating: 4.5
    },
    {
      name: 'Japan',
      image: 'assets/japan.png',
      description: 'Description of Japan',
      price: 7000000,
      rating: 4.7
    },
    {
      name: 'Italy',
      image: 'assets/italy.png',
      description: 'Description of Italy',
      price: 600000,
      rating: 4.6
    },
    {
      name: 'Australia',
      image: 'assets/australia.png',
      description: 'Description of Australia',
      price: 900000,
      rating: 4.8
    },
    {
      name: 'USA',
      image: 'assets/usa.png',
      description: 'Description of USA',
      price: 800000,
      rating: 4.9
    }
  ];

  wishlist: Country[] = [];

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  toggleWishlist(country: Country): void {
    const index = this.wishlist.indexOf(country);
    if (index > -1) {
      this.wishlist.splice(index, 1); // Remove from wishlist
      this.toastr.info(`${country.name} removed from wishlist`, 'Removed');
    } else {
      this.wishlist.push(country); // Add to wishlist
      this.toastr.success(`${country.name} added to wishlist`, 'Added');
    }
  }

  isInWishlist(country: Country): boolean {
    return this.wishlist.includes(country);
  }

  viewDetails(country: Country): void {
    this.router.navigate(['/travel-detail'], { state: { country } });
  }
}
