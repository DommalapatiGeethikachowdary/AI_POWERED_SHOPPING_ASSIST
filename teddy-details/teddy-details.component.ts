import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teddy-details',
  templateUrl: './teddy-details.component.html',
  styleUrls: ['./teddy-details.component.scss']
})
export class TeddyDetailsComponent {
teddy: any;
constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();


  console.log(">>>>>>>>>>>>>>>>>>>>>>", navigation);

  this.teddy = navigation?.extras.state?.['teddy'];
}
ngOnInit(): void {

}

}
