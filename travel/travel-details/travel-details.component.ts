import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Country {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  countries: Country[] = []
  travel: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();


    console.log(">>>>>>>>>>>>>>>>>>>>>>", navigation);

    this.travel = navigation?.extras.state?.['country'];
  }
  ngOnInit(): void {

  }
}