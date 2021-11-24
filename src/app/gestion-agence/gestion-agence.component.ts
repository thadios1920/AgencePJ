import { Component, OnInit } from '@angular/core';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.component.html',
  styleUrls: ['./gestion-agence.component.css']
})
export class GestionAgenceComponent implements OnInit {
  leshotels:HotelClass[]=[];
  hotel:HotelClass = new HotelClass();
  lesvilles:string[]=[];
  
  constructor(private ressourcesevice : RessourceService) { }
  onAjoutHotel(){

  }
  onChangeHotel(){

  }
  ngOnInit(): void {
    this.leshotels=this.ressourcesevice.gethotels();
    this.lesvilles=this.ressourcesevice.getvilles();

  }

}
