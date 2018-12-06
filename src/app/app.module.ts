import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { RazasComponent } from './razas/razas.component';
import { FooterComponent } from './footer/footer.component';
import { BotoncamilaComponent } from 'src/app/botoncamila/botoncamila.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    RazasComponent,
    FooterComponent,
    BotoncamilaComponent,
    MenuComponent,
    NavbarComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
