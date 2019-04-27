import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent} from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CoursesComponent } from './courses/courses.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { Class3to8Component } from './class3to8/class3to8.component';
import { Class9to12Component } from './class9to12/class9to12.component';
import { IitjeeComponent } from './iitjee/iitjee.component';
import { UpscComponent } from './upsc/upsc.component';
import { UgcComponent } from './ugc/ugc.component';
import { CatComponent } from './cat/cat.component';
import { GateComponent } from './gate/gate.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContactComponent,
    TestimonialsComponent,
    CoursesComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    SliderComponent,
    Class3to8Component,
    Class9to12Component,
    IitjeeComponent,
    UpscComponent,
    UgcComponent,
    CatComponent,
    GateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
