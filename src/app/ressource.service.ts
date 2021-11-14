import { Injectable } from '@angular/core';
import { HotelClass } from './hotel-class';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  listeville=['Tunis','Hammamet','Djerba','Bizerte','Nabeul'];
  getvilles(){
    return this.listeville;
  }
  listHotel:HotelClass [] = [ 
    new HotelClass('radisson blue','',this.listeville[2],"luxe","tres bien",9 ), 
    new HotelClass('Africa jade','', this.listeville[1],"luxe","tres bien",8.7 ), 
    new HotelClass('El Mouradi','',this.listeville[1],"moyen"," bien",6.3 ), 
    new HotelClass('Beach Club','',this.listeville[1],"bas de gamme ","pas mal",5.3 )
    
   ]
   
   gethotels(){
     return this.listHotel;
   }
  constructor() { }
}
