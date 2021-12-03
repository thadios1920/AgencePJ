import { Injectable } from '@angular/core';
import { HotelClass } from './hotel-class';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/listHotel';
const URL1 = 'http://localhost:3000/Login' ;

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  listeville=['Tunis','Hammamet','Djerba','Bizerte','Nabeul'];
  getvilles(){
    return this.listeville;
  }
  leshotelsSearched:HotelClass[]=[];

  listHotel:HotelClass [] = [ 
    new HotelClass('radisson blue','',this.listeville[2],"luxe","tres bien",9,5 ), 
    new HotelClass('Africa jade','../../assets/africajade2.jpg', this.listeville[1],"luxe","tres bien",8.7,4 ), 
    new HotelClass('El Mouradi','',this.listeville[1],"moyen"," bien",6.3,3), 
    new HotelClass('Beach Club','',this.listeville[1],"bas de gamme ","pas mal",5.3,4 )
   ]
   listlogin:Login[]=[];
   public addHotel(hotel: HotelClass){
    let h1 = Object.assign({},hotel);
    this.leshotelsSearched.push(h1);
  };
   
   gethotels(){
     return this.listHotel;
   }
   
public addHotelToRessource(hotel:HotelClass){
  if(this.listHotel.findIndex(x=>x.name==hotel.name)==-1){
    console.log('do not enter');
    this.listHotel.push(hotel);}
}

  
   gethotelsSearched(){
    return this.leshotelsSearched;
  }
  initializeHotelsSearched(){
    return this.leshotelsSearched=[];
  }
  getLogin(){
    return this.http.get<Login[]>(URL1);
  }
  addLogin(l:Login):Observable<Login>{
    return this.http.post<Login>(URL1, l);
  }
  setHotel(hotel:HotelClass){
    let index= this.listHotel.findIndex(x=>x.name==hotel.name);
    this.listHotel[index]=hotel;
    return this.listHotel[index];
  }

  getHotels():Observable<HotelClass[]>{
    
    return this.http.get<HotelClass[]>(URL);
    }
    modifyHotel(hotel:HotelClass,id:number|undefined):Observable<HotelClass>{
      return this.http.put<HotelClass>(URL+"/"+id,hotel);
    }


    delHotel(id:number|undefined):Observable<HotelClass>{
      return this.http.delete<HotelClass>(URL+"/"+id);
    }
   
  constructor(private http:HttpClient) { }

}
