import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { RessourceService } from '../ressource.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  log:Login[] =[]; 
  v:boolean=true;
  mail:string ="";
  pass:string ="";
  prodForm:FormGroup = new FormGroup({});
  constructor(private ressourseservice:RessourceService,private fb:FormBuilder) { }

  onSubmit(){
    if (this.v) {
      for (let index = 0; index < this.log.length; index++) {
        if (this.log[index].mail === this.mail && this.log[index].password === this.pass ) {
          console.log("welcome"+this.log[index].nom);
          window.location.href="/gestion"
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
  
  onAjout(){
    this.ressourseservice.addLogin(this.prodForm.value)
 .subscribe (data => console.log(data));
  }

}
