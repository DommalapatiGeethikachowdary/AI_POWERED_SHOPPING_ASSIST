import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: string;
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit{
searchQuery: any;
  search: any[]=[];

items: any[] = [
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
  searchvalue: any;
constructor(private router:Router){
 
  const navigation = this.router.getCurrentNavigation();
  this.searchvalue = navigation?.extras.state?.['data'];
  console.log(">>>>>>>>>>>>>>>>>>asfasf>>>>", this.searchvalue);

}
ngOnInit(): void {
  this.search.push(...this.items.filter(x => x.name === this.searchvalue));
  console.log(this.search);
  
}
}
