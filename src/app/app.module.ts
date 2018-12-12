import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { RazasComponent } from './razas/razas.component';
import { FooterComponent } from './footer/footer.component';
import { BotoncamilaComponent } from 'src/app/botoncamila/botoncamila.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { ContactComponent } from './contact/contact.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PortadaSecundariaComponent } from './portada-secundaria/portada-secundaria.component';
import { PortadaComponent } from './portada/portada.component';


const rutas : Routes = [
  { path:'', component: PortadaComponent },
  { path:'compra', component: CompraComponent },
  { path:'detalles/:razaId', component: DetallesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    RazasComponent,
    FooterComponent,
    BotoncamilaComponent,
    NavbarComponent,
    CompraComponent,
    ContactComponent,
    DetallesComponent,
    PortadaComponent,
    PortadaSecundariaComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
