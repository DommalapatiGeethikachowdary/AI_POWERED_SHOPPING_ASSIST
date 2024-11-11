import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeItem } from '../homeitems/homeitems.component';

@Component({
  selector: 'app-home-item-detail',
  templateUrl: './home-item-detail.component.html',
  styleUrls: ['./home-item-detail.component.scss']
})
export class HomeItemDetailComponent implements OnInit {
onSearch() {
throw new Error('Method not implemented.');
}
  item: HomeItem | undefined;

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
searchQuery: any;


  constructor(private route: ActivatedRoute,private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.['homeItem'];
  }

  ngOnInit(): void {
    // const name = this.route.snapshot.paramMap.get('name');
    // this.item = this.homeItems.find(item => item.name === name);
  }
}
