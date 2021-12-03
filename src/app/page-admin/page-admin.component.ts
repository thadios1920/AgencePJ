import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { RessourceService } from '../ressource.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
@Injectable()
export class PageAdminComponent implements OnInit {
  log:Login[] =[]; 
  loged:boolean=false;
  mail:string ="";
  pass:string ="";
  prodForm:FormGroup = new FormGroup({});
  constructor(private ressourseservice:RessourceService,private fb:FormBuilder) { }

  onSubmit(){
    if (!this.loged) {
      for (let index = 0; index < this.log.length; index++) {
        if (this.log[index].mail === this.mail && this.log[index].password === this.pass ) {
          console.log("welcome"+this.log[index].nom);
          window.location.href="/gestion"
          this.loged = true;
        }
      }
  } 
}
  ngOnInit(): void {
    this.prodForm = this.fb.group(
      {
        mail:[''],
        pass:[] 
      }
    )
    this.ressourseservice.getLogin()
 .subscribe (data =>{ this.log = data;console.log(data);
 })
  }
  public get refmail()
 { return this.prodForm.get('mail'); }
 public get refpass()
 { return this.prodForm.get('pass'); }

  
  public getloged() {
    return this.loged;
  }
  
  onAjout(){
    this.ressourseservice.addLogin(this.prodForm.value)
 .subscribe (data => console.log(data));
  }

}
