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
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './compra/compra.component';


const appRoutes : Routes = [
  { path:'footer', component: FooterComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'menu', component: MenuComponent },
  { path:'card', component: CardComponent },
  { path:'compra', component: CompraComponent },


]




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
    CompraComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
