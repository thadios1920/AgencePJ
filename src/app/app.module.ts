import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { HoteltnComponent } from './hoteltn/hoteltn.component';
import { VoyageOrganiseComponent } from './voyage-organise/voyage-organise.component';
import { CroisiereComponent } from './croisiere/croisiere.component';
import { OmraComponent } from './omra/omra.component';
import { ListhotelComponent } from './listhotel/listhotel.component';
import { GestionAgenceComponent } from './gestion-agence/gestion-agence.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    HoteltnComponent,
    VoyageOrganiseComponent,
    CroisiereComponent,
    OmraComponent,
    ListhotelComponent,
    GestionAgenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
