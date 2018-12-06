import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { RazasComponent } from './razas/razas.component';
import { FooterComponent } from './footer/footer.component'





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    RazasComponent,
    FooterComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
