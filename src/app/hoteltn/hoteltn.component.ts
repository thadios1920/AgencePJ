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
  year:Date = new Date();
  d1:Date = new Date();
  lesvilles:string[]=[];
  list:number=0;
  hotel:HotelClass = new HotelClass();
  villeSelected:String="";
  j:number=-1;
  counter(): any[] {
    this.j=this.j+1;
    return new Array(this.leshotelsSearched[this.j].etoile);
  }
  onSubmit(chaine:string) { 
    this.leshotelsSearched=this.ressourcesevice.initializeHotelsSearched();
     
      for (let index = 0; index < this.leshotels.length; index++) {
        if (chaine==this.leshotels[index].ville) {
          this.ressourcesevice.addHotel(this.leshotels[index]);
          
        }
        this.leshotelsSearched=this.ressourcesevice.gethotelsSearched();  
      }console.log(this.d1);
  } 
  
  onModifie(){
    // console.log(this.year.getTime()+"/"+this.year.getMonth()+"/"+this.year.getFullYear());
  }
  constructor(private ressourcesevice : RessourceService) { }

  ngOnInit(): void {
    this.leshotels=this.ressourcesevice.gethotels();
    this.lesvilles=this.ressourcesevice.getvilles();
  }

}
