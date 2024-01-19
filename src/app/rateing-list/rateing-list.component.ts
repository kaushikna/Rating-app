import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rateing-list',
  templateUrl: './rateing-list.component.html',
  styleUrls: ['./rateing-list.component.css']
})
export class RateingListComponent implements OnInit {
 
  selectedRating: number = 0;
  username: string = '';
  stars=[1,2,3,4,5]
  checkbox1: boolean = true;
  checkbox2: boolean = false;

  userRatings: [{ rating: number, username: string }] = [{
    rating: 0, username: ''
  }];
  ngOnInit(){
    const storedRatings = localStorage.getItem('userRatings');

    if(storedRatings){
      const storedUserRatings = JSON.parse(storedRatings);
      this.userRatings=storedUserRatings
      this.sortAscending()
    }
  }


  sortAscending() {
    this.userRatings.sort((a, b) => a.rating - b.rating);
    this.checkbox2=false
  }

  sortDescending(): void {
    this.userRatings.sort((a, b) => b.rating - a.rating);
    this.checkbox1=false

  }


}
