import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FirstPageComponent, 
    HeaderComponent, SliderComponent, ServiceComponent, AboutComponent, ExplanationComponent, ContactComponent, InfoComponent, FooterComponent
  ],
  exports: [FirstPageComponent]
})
export class FirstPageModule { }
