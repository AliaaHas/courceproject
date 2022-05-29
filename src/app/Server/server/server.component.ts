import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number=10;
  serverstatus:string='Offline';
  getserverstatus(){
    return this.serverstatus;
  }
 allowanotheserver=false;
 servercreation='No Server Was created';
ServerName:string='test';
servercreated=false;
Showscret=false;
log=[];

UserName:string='';

  constructor() {
   setTimeout(()=>{
     this.allowanotheserver= true;
   },2000);

   this.serverstatus=Math.random()>.5?'online':'offline';
   }


  ngOnInit(): void {
  }

  oncreateserver(){
    this.servercreated=true;
    this.servercreation='Server Was Created Name Is ' + this.ServerName;
  }
  onupdateservername(event:Event){
    console.log(event);
    this.ServerName= (<HTMLInputElement>event.target).value;

  }

  Getcolor(){
   return  this.serverstatus==='online'?'green':'red'
  }
  ontoggledisplay(){
    this.Showscret=!this.Showscret;
    this.log.push(this.log.length+1);
  }

}
