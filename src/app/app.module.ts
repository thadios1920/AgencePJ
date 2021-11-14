import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { HoteltnComponent } from './hoteltn/hoteltn.component';
import { VoyageOrganiseComponent } from './voyage-organise/voyage-organise.component';
import { CroisiereComponent } from './croisiere/croisiere.component';
import { OmraComponent } from './omra/omra.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    HoteltnComponent,
    VoyageOrganiseComponent,
    CroisiereComponent,
    OmraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
