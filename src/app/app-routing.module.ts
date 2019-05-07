import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CoursesComponent } from './courses/courses.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Learning', component: LearningComponent },
  { path: 'Faculty', component: FacultyComponent },  
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
