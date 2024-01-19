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
    const storedRatings = localStorage.getItem('userRatings');

    if (storedRatings) {
      // Parse the stored string into an array
      const storedUserRatings = JSON.parse(storedRatings);

      // Emit each stored rating
      storedUserRatings.forEach((userRating: { rating: number, username: string }) => {
        this.ratingSelected.emit(userRating);
      });
    }
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
  }

  saveToLocalStorage(): void {
    let storedUserRatings = localStorage.getItem('userRatings');

    // If no data is stored yet, initialize an empty array
    if (!storedUserRatings) {
      storedUserRatings = '[]';
    }

    // Parse the stored string into an array
    const userRatingsArray = JSON.parse(storedUserRatings);

    // Add the new rating to the array
    userRatingsArray.push({ rating: this.selectedRating, username: this.username });

    // Save the updated array back to localStorage
    localStorage.setItem('userRatings', JSON.stringify(userRatingsArray));
  
  }
  submitform(){
    this.saveToLocalStorage();
    this.ratingSelected.emit({ rating: this.selectedRating, username: this.username });
    this.selectedRating = 0;
    this.username = '';
    this.router.navigate(['/rating-list']);

  }

  clearform(){
    this.selectedRating=0 
     this.username=''
  }
}
