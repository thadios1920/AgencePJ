import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-hoteltn',
  templateUrl: './hoteltn.component.html',
  styleUrls: ['./hoteltn.component.css']
})
export class HoteltnComponent implements OnInit {
  leshotels:HotelClass[]=[];
  leshotelsSearched:HotelClass[]=[];

  lesvilles:string[]=[];
  list:number=0;
  hotel:HotelClass = new HotelClass();
  villeSelected:String="";
 reloadPage() {
      window.location.reload();
  
}
  onSubmit(chaine:string) { 
    this.leshotelsSearched=this.ressourcesevice.initializeHotelsSearched();
     
      for (let index = 0; index < this.leshotels.length; index++) {
        if (chaine==this.leshotels[index].ville) {
          this.ressourcesevice.addHotel(this.leshotels[index]);
          
        }
        this.leshotelsSearched=this.ressourcesevice.gethotelsSearched();  
          
      }
     
      
   


  } 
  constructor(private ressourcesevice : RessourceService) { }

  ngOnInit(): void {
    this.leshotels=this.ressourcesevice.gethotels();
    this.lesvilles=this.ressourcesevice.getvilles();
  }

}
