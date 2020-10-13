import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mydata:any;
  etat : string ;
  change : boolean = true ;
  temp  : any;

  val :false;
  // @Output()
  //   onChange : EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
    if(localStorage.getItem("taa") === "false"){
         this.change =false ;}
         else {this.change =true ;}

     console.log( typeof localStorage.getItem("t"));
    const headers = new HttpHeaders({
      'Accept' : '*' ,
      'X-Requested-With' : 'XMLHttpRequest'
    });
    this.mydata =this.http.get("http://127.0.0.1:80/api");
    this.mydata.subscribe(
      data => {
        this.etat = data._body;
  
        
        console.log(this.etat.charAt(0));
        console.log(typeof this.temp);
     
        if (this.etat.charAt(0) == "d") {
               this.change = ! this.change;
               console.log("rrrrrrrr");
        }
        localStorage.setItem("taa", this.change.toString());      
      }, error => {
        console.log(error); }
    );
    setInterval(function(){ window.location.reload(); }, 1000);
  }
  title = 'parkingFront';
  constructor(private httpclient: HttpClient, private http :Http) {
  

  }
  
   onSubmit(){

    setInterval(function(){ window.location.reload(); }, 5000);
    
   }

}
