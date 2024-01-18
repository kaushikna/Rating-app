import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateingListComponent } from './rateing-list/rateing-list.component';
import { RatingComponent } from './rating/rating.component';



const routes: Routes = [
  { path: '', redirectTo: '/rating-list', pathMatch: 'full' },
  {
  path:'rating-list', component:RateingListComponent
},
{
  path:'rating-from', component:RatingComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
