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

  leshotels: HotelClass[] = [];
  leshotelsSearched: HotelClass[] = [];
  currentDate = new Date();
  d1: Date = new Date();
  lesvilles: string[] = [];
  list: number = 0;
  hotel: HotelClass = new HotelClass();
  villeSelected: String = "";
  nb: number = 0;
  nbTypeChambre: number[] = [0, 0, 0, 0, 0];
  nbTypeChambre1: number[] = [0, 0, 0, 0, 0];
  nbPers: number = 0;
  tab: number[] = [];
  nbChambre: number[] = []; 
  nbNuits: number = 0; 
  j: number = -1;
  cValue: string = '';
  change: boolean = false;
  @Input() etat: boolean = true;
  nbWeekEnd: number = 0;
  prix: number=0;
  bool1:boolean = false;
  bool2:boolean = true;
  bool3:boolean = true;
  bool4:boolean = true;

  counter(i: number | undefined): any[] {
    this.j = this.j + 1;
    console.log(this.j);
    return new Array(i);

  }
  setDateArrive(arrive: any) {
    console.log(arrive);
    this.d1 = arrive.value;
    console.log("c bon");

  }
  ajoutPers(s: any) {
    this.nbChambre.length = 0;
    this.nb = s.value;
    for (let index = 0; index < this.nb; index++) {
      this.nbChambre[index] = 0;

    }
  }
  arr : string = "";
  dep : string = "";
  getnights(ch1: string, ch2: string) {
    let dateArrive = new Date(ch1);
    let dateDepart = new Date(ch2);
    let s = 0;
    do {
      s++;
      dateArrive.setDate(dateArrive.getDate() + 1)
      console.log("i am here");

    } while ((dateArrive.getFullYear() < dateDepart.getFullYear()) || (dateArrive.getMonth() < dateDepart.getMonth()) || (dateArrive.getDate() < dateDepart.getDate()));

    return s;
  }
  isWeekend(ch: string, n: number) {
    var date = new Date(ch);
    console.log(n);

    var s = 0;
    for (let index = 0; index < n; index++) {

      if (date.getDay() === 6 || date.getDay() === 0) {
        s++;
      }
      console.log("la date est");
      console.log(date.getDay());
      date.setDate(date.getDate() + 1);
    }
    return s;
  }
  getNbTypeChambre(f: NgForm) {
    this.nbTypeChambre = [0, 0, 0, 0, 0];
    this.tab[0] = Number(f.value.nbPersonneParChambre0)
    this.tab[1] = Number(f.value.nbPersonneParChambre1)
    this.tab[2] = Number(f.value.nbPersonneParChambre2)
    this.tab[3] = Number(f.value.nbPersonneParChambre3)
    for (let index = 0; index < this.nb; index++) {
      switch (this.tab[index]) {
        case 1:
          this.nbTypeChambre[0]++;

          break;
        case 2:
          this.nbTypeChambre[1]++;

          break;
        case 3:
          this.nbTypeChambre[2]++;

          break;
        case 4:
          this.nbTypeChambre[3]++;

          break;

        default:
          break;
      }
    }

  }
  getTypeChambre(char: string) {

    switch (char) {
      case "1":
        return "Chambre Single Standard";

      case "2":
        console.log('ani houni');



        return "Chambre Double Standard";
      case "3":


        return "Chambre Triple Standard";

      case "4":


        return "Chambre Quadruple Standard";
      default:

        return "";
    }

  }
  
  calcul(x:any,h:HotelClass){
    console.log("i am here");
    
    let y: number = 0;
    this.nbPers = 0;
    this.nbTypeChambre1 = this.nbTypeChambre;
    if ((h.pricesRoom?.single != null) && (h.pricesRoom?.double != null) && (h.pricesRoom?.triple != null) && (h.pricesRoom?.quadruple != null) && (h.addWeekEnd != null)) {
      if (x.innerText == "petitDej" && h.pricesCatering?.petitDej != null) {

        console.log("nbpers====" + this.nbPers);

        this.nbPers = (this.nbTypeChambre1[0] * 1 + this.nbTypeChambre1[1] * 2 + this.nbTypeChambre1[2] * 3 + this.nbTypeChambre1[3] * 4);
        console.log("nbweek" + this.nbWeekEnd);

        y = (this.nbNuits - this.nbWeekEnd) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.petitDej);
        y += (this.nbWeekEnd * (100 + h.addWeekEnd) / 100) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.petitDej);
        
      }
      if (x.innerText == "demiPension" && h.pricesCatering?.demiPension != null) {

        console.log("nbpers====" + this.nbPers);

        this.nbPers = (this.nbTypeChambre1[0] * 1 + this.nbTypeChambre1[1] * 2 + this.nbTypeChambre1[2] * 3 + this.nbTypeChambre1[3] * 4);
        console.log("nbweek" + this.nbWeekEnd);

        y = (this.nbNuits - this.nbWeekEnd) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.demiPension);
        y += (this.nbWeekEnd * (100 + h.addWeekEnd) / 100) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.demiPension);

        
      }
      if (x.innerText == "pensionComplete" && h.pricesCatering?.pensionComplete != null) {

        console.log("nbpers====" + this.nbPers);

        this.nbPers = (this.nbTypeChambre1[0] * 1 + this.nbTypeChambre1[1] * 2 + this.nbTypeChambre1[2] * 3 + this.nbTypeChambre1[3] * 4);
        console.log("nbweek" + this.nbWeekEnd);

        y = (this.nbNuits - this.nbWeekEnd) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.pensionComplete);
        y += (this.nbWeekEnd * (100 + h.addWeekEnd) / 100) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.pensionComplete);
      
      }
      if (x.innerText == "allIn" && h.pricesCatering?.allIn != null) {
        console.log("nbpers====" + this.nbPers);
        this.nbPers = (this.nbTypeChambre1[0] * 1 + this.nbTypeChambre1[1] * 2 + this.nbTypeChambre1[2] * 3 + this.nbTypeChambre1[3] * 4);
        console.log("nbweek" + this.nbWeekEnd);

        y = (this.nbNuits - this.nbWeekEnd) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.allIn);
        y += (this.nbWeekEnd * (100 + h.addWeekEnd) / 100) * ((this.nbTypeChambre1[0] * h.pricesRoom?.single) + (this.nbTypeChambre1[1] * h.pricesRoom?.double) + (this.nbTypeChambre1[2] * h.pricesRoom?.triple) + (this.nbTypeChambre1[3] * h.pricesRoom?.quadruple) + this.nbPers * h.pricesCatering?.allIn);

        
      }

    }
<<<<<<< HEAD
    
    console.log(this.prix);
    
    return y;
=======
    return y;
    this.prix=y
>>>>>>> ec237b49b9dfd8a6163f38a58458910783d66a22
 

    return 0;

  }
  
  afficherPrix(){
    return this.prix;
  }
  onSubmit(f: NgForm) {
    this.dep = f.value.départ;
    this.arr = f.value.Arrive;
    this.nbPers = 0;
    this.prix=0
    this.getNbTypeChambre(f);
    this.leshotelsSearched = this.ressourcesevice.initializeHotelsSearched();
    console.log(f.value);
    this.nbNuits = this.getnights(f.value.Arrive, f.value.départ);
    console.log("nbre de niutees");
    console.log(this.nbNuits);
    this.nbWeekEnd = this.isWeekend(f.value.Arrive, this.nbNuits);





    for (let index = 0; index < this.leshotels.length; index++) {
      if (f.value.v == this.leshotels[index].ville) {
        this.ressourcesevice.addHotel(this.leshotels[index]);

      }
      this.leshotelsSearched = this.ressourcesevice.gethotelsSearched();
    }

    
   
  }

  onModifie() {
    // console.log(this.year.getTime()+"/"+this.year.getMonth()+"/"+this.year.getFullYear());
  }
  constructor(private ressourcesevice: RessourceService) { }

  ngOnInit(): void {

    this.cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    this.ressourcesevice.getHotels().subscribe(data => this.leshotels = data);
    this.lesvilles = this.ressourcesevice.getvilles();
  }

}