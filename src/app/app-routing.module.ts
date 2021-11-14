import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroisiereComponent } from './croisiere/croisiere.component';
import { HoteltnComponent } from './hoteltn/hoteltn.component';
import { OmraComponent } from './omra/omra.component';
import { VoyageOrganiseComponent } from './voyage-organise/voyage-organise.component';

const routes: Routes = [
  {path:'hotel', component:HoteltnComponent},
  {path:'voyageorganise' , component:VoyageOrganiseComponent},
  {path:'croisiere' , component:CroisiereComponent},
  {path:'omra' , component:OmraComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
