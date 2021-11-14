import { Component, OnInit } from '@angular/core';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-hoteltn',
  templateUrl: './hoteltn.component.html',
  styleUrls: ['./hoteltn.component.css']
})
export class HoteltnComponent implements OnInit {
  leshotels:HotelClass[]=[];
  lesvilles:string[]=[];
  list:number=0;
  onAfficheHotels(){

  }
  constructor(private ressourcesevice : RessourceService) { }

  ngOnInit(): void {
    this.leshotels=this.ressourcesevice.gethotels();
    this.lesvilles=this.ressourcesevice.getvilles();
  }

}
