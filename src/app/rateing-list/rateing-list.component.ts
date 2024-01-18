import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rateing-list',
  templateUrl: './rateing-list.component.html',
  styleUrls: ['./rateing-list.component.css']
})
export class RateingListComponent  {
 
  selectedRating: number = 0;
  username: string = '';
  stars=[1,2,3,4,5]
  checkbox1: boolean = false;
  checkbox2: boolean = false;

  userRatings: { rating: number, username: string }[] = [];

  onRatingSelected(data: { rating: number, username: string }): void {
    this.selectedRating = data.rating;
    this.username = data.username;
    this.userRatings.push({ rating: this.selectedRating, username: this.username });
    this.selectedRating =0;
    this.username ='';
    this.sortDescending();
  }

  sortAscending(): void {
    this.userRatings.sort((a, b) => a.rating - b.rating);
    this.checkbox2=false
  }

  sortDescending(): void {
    this.userRatings.sort((a, b) => b.rating - a.rating);
    this.checkbox1=false

  }


}
