import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item: any;
 dress: any;
  

 constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();


  console.log(">>>>>>>>>>>>>>>>>>>>>>", navigation);

  this.dress = navigation?.extras.state?.['dress'];
}
ngOnInit(): void {

}


}


