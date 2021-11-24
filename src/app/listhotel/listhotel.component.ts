import { Component, Input, OnInit } from '@angular/core';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-listhotel',
  templateUrl: './listhotel.component.html',
  styleUrls: ['./listhotel.component.css']
})
export class ListhotelComponent implements OnInit {
  hotel:HotelClass = new HotelClass();
  leshotelsSearched:HotelClass[]=[];
  @Input() indexVille:string="";
  


  constructor(private ressourcesevice : RessourceService) { }
  

  ngOnInit(): void {
  }

}
