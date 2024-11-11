import { Component, OnInit } from '@angular/core';
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
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.scss']
})
export class MobileDetailsComponent implements OnInit {
  mobile: Mobile | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();


    console.log(">>>>>>>>>>>>>>>>>>>>>>",navigation);
    
    this.mobile = navigation?.extras.state?.['mobile'];
  }

  ngOnInit(): void {}
}
