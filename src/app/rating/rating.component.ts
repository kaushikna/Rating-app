import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private router:Router) { }
  stars=[1,2,3,4,5]
  @Input() maxRating: number = 5;
  @Input() selectedRating: number = 0; // New input property
  @Output() ratingSelected: EventEmitter<{ rating: number, username: string }> = new EventEmitter<{ rating: number, username: string }>();
  username: string = '';

  ngOnInit(): void {
    // Initialize from localStorage if available
    const storedRating = localStorage.getItem('userRating');
    const storedUsername = localStorage.getItem('username');
    
    if (storedRating && storedUsername) {
      this.selectedRating = +storedRating;
      this.username = storedUsername;
      this.ratingSelected.emit({ rating: this.selectedRating, username: this.username });
    }
  }

  setRating(rating: number): void {
    this.selectedRating = rating;

  
  }

  saveToLocalStorage(): void {
    localStorage.setItem('userRating', this.selectedRating.toString());
    localStorage.setItem('username', this.username);
  
  }
  submitform(){
    this.saveToLocalStorage()
    this.ratingSelected.emit({ rating: this.selectedRating, username: this.username });
    this.router.navigate(['/rating-list']);

  }

  clearform(){
    this.ratingSelected.emit({ rating: 0, username: '' });
  }
}
