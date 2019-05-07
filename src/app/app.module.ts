import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { FacultyComponent} from './faculty/faculty.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CoursesComponent } from './courses/courses.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { Class3to8Component } from './modal/class3to8/class3to8.component';
import { Class9to12Component } from './modal/class9to12/class9to12.component';
import { IitjeeComponent } from './modal/iitjee/iitjee.component';
import { UpscComponent } from './modal/upsc/upsc.component';
import { UgcComponent } from './modal/ugc/ugc.component';
import { GateComponent } from './modal/gate/gate.component';
import { Java8Component } from './modal/java8/java8.component';
import { TestingComponent } from './modal/testing/testing.component';
import { BankComponent } from './modal/bank/bank.component';
import { HadoopComponent } from './modal/hadoop/hadoop.component';
import { SpringbootComponent } from './modal/springboot/springboot.component';
import { PythonComponent } from './modal/python/python.component';
import { AimlComponent } from './modal/aiml/aiml.component';
import { CounselingComponent } from './modal/counseling/counseling.component';
import { CatComponent } from './modal/cat/cat.component';


@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    FacultyComponent,
    ContactComponent,
    TestimonialsComponent,
    CoursesComponent,
    PricingComponent,
    FooterComponent,
    HomeComponent,
    SocialComponent,
    NavigationComponent,
    SliderComponent,
    Class3to8Component,
    Class9to12Component,
    IitjeeComponent,
    UpscComponent,
    UgcComponent,
    GateComponent,
    Java8Component,
    TestingComponent,
    BankComponent,
    HadoopComponent,
    SpringbootComponent,
    PythonComponent,
    AimlComponent,
    CounselingComponent,
    CatComponent
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
