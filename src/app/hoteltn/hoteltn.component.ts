import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';
import { PageAdminComponent } from '../page-admin/page-admin.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hoteltn',
  templateUrl: './hoteltn.component.html',
  styleUrls: ['./hoteltn.component.css']
})
export class HoteltnComponent implements OnInit {
  leshotels:HotelClass[]=[];
  leshotelsSearched:HotelClass[]=[];
  currentDate = new Date();
  d1:Date = new Date();
  lesvilles:string[]=[];
  list:number=0;
  hotel:HotelClass = new HotelClass();
  villeSelected:String="";
  nb:number=0;
  nbChambre:number[]=[];
  nbNuits:number=0;
  j:number=-1;
  cValue:string='';
  change:boolean=false;
  @Input() etat:boolean=true;

  counter(i:number|undefined): any[] {
    this.j=this.j+1;
    console.log(this.j);    
    return new Array(i);
  
  }
  setDateArrive(arrive:any){
    console.log(arrive);
    this.d1=arrive.value;
    console.log("c bon");
    
  }
  ajoutPers(s:any){
    this.nbChambre.length=0;
    this.nb=s.value;
    for (let index = 0; index < this.nb; index++) {
       this.nbChambre[index] = 0;
      
    }
  }
  getnights(ch1:string,ch2:string){
    let dateArrive=new Date(ch1);
    let dateDepart=new Date(ch2);
    let s=0;
    do {
      s++;
      dateArrive.setDate(dateArrive.getDate()+1)
      console.log("i am here");
      
    } while ((dateArrive.getFullYear()<dateDepart.getFullYear()) || (dateArrive.getMonth()<dateDepart.getMonth()) || (dateArrive.getDate()<dateDepart.getDate()));
    
    return s;
  }
  isWeekend(ch:string,n:number) {
    var date = new Date(ch);
    console.log(n);
    
    var s=0;
    for (let index = 0; index < n; index++) {

      if (date.getDay() === 6 || date.getDay() === 0) {
        s++ ;
      }
      console.log("la date est");
      
      console.log(date.getDay());
      
      date.setDate(date.getDate()+1);       

      
    }
    return s;
  }
  onSubmit(f:NgForm) { 
    this.leshotelsSearched=this.ressourcesevice.initializeHotelsSearched();
     console.log(f.value);
     this.nbNuits=this.getnights(f.value.Arrive,f.value.départ);
     console.log("nbre de niutees");
     console.log(this.nbNuits);
     
     
     
    console.log(this.isWeekend(f.value.Arrive,this.nbNuits));
     
     
    
     
     
      for (let index = 0; index < this.leshotels.length; index++) {
        if (f.value.v==this.leshotels[index].ville) {
          this.ressourcesevice.addHotel(this.leshotels[index]);
          
        }
        this.leshotelsSearched=this.ressourcesevice.gethotelsSearched();  
      }
      
      
      
  } 
  
  onModifie(){
    // console.log(this.year.getTime()+"/"+this.year.getMonth()+"/"+this.year.getFullYear());
  }
  constructor(private ressourcesevice : RessourceService) { }

  ngOnInit(): void {
    this.cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    this.leshotels=this.ressourcesevice.gethotels();
    this.lesvilles=this.ressourcesevice.getvilles();
  }

}
