import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-hotel-info', 
  templateUrl: './hotel-info.component.html', 
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  
  leshotels: HotelClass[] = [];
  lesclients : Client[] =[]; 
  clientForm=new FormGroup(
    {id :new FormControl('0000'), 
    nom : new FormControl(''),
    mail:new FormControl(''),
    local : new FormControl(''),
    tel : new FormControl('') 
    });
     
    cin : number = 0;
    id : number =0;
    nom : string = "";
    mail : string = "";
    local : string = "";
    tel : number = 0;
    
    public get refid()
 { return this.clientForm.get('id'); }
 public get refnom()
 { return this.clientForm.get('nom'); }
 public get refmail()
 { return this.clientForm.get('mail'); }
 public get reftel()
 { return this.clientForm.get('tel'); }
 public get refreg()
 { return this.clientForm.get('local'); }

 
  isValidLibelle(){
    return this.clientForm.get('nom')?.errors?.minlength &&
    this.clientForm.controls['nom'].touched;
    }

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private ressourcesevice:RessourceService) { }
 hot:number =0 ;
 i:number = 0;
 p:number = 0;
 arrive : string = "" ;
 depart : string = "" ;
 finish: boolean = false;
 
  des : string | undefined ;
  getInfo(){
    
    
    for (let index = 0; index < this.leshotels.length; index++) {
      
      
      if(this.leshotels[index].id == this.hot  ){
        this.des = this.leshotels[index].avis;
        console.log(`trah${this.leshotels[index].avis}`);
        
        this.i=index;
        break;
      }
      
      
      
    }
    
    
  }
  onAjout(){
    this.ressourcesevice.addClient(this.clientForm.value)
    .subscribe (data => console.log(data));
    this.cin = this.clientForm.value.get('id');
    this.nom = this.clientForm.value('nom');
  }
  ngOnInit(): void {
    this.hot = this.activatedRoute.snapshot.params['a.id'];
    this.p = this.activatedRoute.snapshot.params['prix'];
    this.arrive = this.activatedRoute.snapshot.params['arr'];
    this.depart = this.activatedRoute.snapshot.params['dep'];

    this.ressourcesevice.getHotels().subscribe((data: HotelClass[]) => this.leshotels = data);
    this.ressourcesevice.getClient().subscribe(data => this.lesclients = data);
    console.log("des"+this.des);
    
  }
 
}