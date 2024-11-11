import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';


interface Item {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = [
    {
      name: 'Dress',
      image: 'assets/i.png',
      description: 'Beautiful dress',
      price: 49.99,
      rating: '4.5'
    },
    {
      name: 'Toy',
      image: 'assets/toy.png',
      description: 'Fun toy for kids',
      price: 19.99,
      rating: '4.7'
    },
    {
      name: 'Mobile',
      image: 'assets/iii.png',
      description: 'Latest smartphone',
      price: 699.99,
      rating: '4.8'
    },
    {
      name: 'Home items',
      image: 'assets/home_1.png',
      description: 'Useful home item',
      price: 29.99,
      rating: '4.6'
    },
    {
      name: 'Travel',
      image: 'assets/travel_1.png',
      description: 'Travel',
      price: 299.99,
      rating: '4.9'
    }
  ];

  searchQuery: string = '';
  filteredItems: Item[] = [...this.items];

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit() {
    // Initialize filteredItems with all items initially
  }

  onSearch() {
    // Filter items based on searchQuery
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewDetails(dress: Item) {
    this.itemService.setSelectedItem(dress);
    this.router.navigate(['/details'],{state:{dress}});
  }

  logout() {
    localStorage.removeItem('loginitem');
    this.router.navigate(['/login']);
  }
}
