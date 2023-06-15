import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
interface Actor{
  id:number;
  Name:string;
  Age:number;
  industry:string;
}
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})

export class ActorComponent implements OnInit {
  actor:any
  body:Actor={  
    id:0,
    Name:'',
    Age:0,
    industry:''
  }
  isVisible:boolean=false;
  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    this.getActor();
  }
getActor(){
this.service.getActor().subscribe((data)=>{
  this.actor = data;
  console.log(data);     
} )      
}
createActor(){
this.service.createActor(this.body).subscribe()
  console.log(this.body);
  this.getActor();
  this.resetForm();
  
}
resetForm(){
  this.body={
    id:0,
    Name:'',
    Age:0,
    industry:''
  }
}
edit(id:number){
  this,this.isVisible=true;
  console.log(id,"edit Id");
  
  this.service.getActorById(id).subscribe((data:any)=>{
    this.actor=data;
    console.log(data);   
  this.body={ 
    id:data[0].id,
    Name:data[0].Name,
    Age:data[0].Age,
    industry:data[0].industry
  }
  });
  this.getActor();

} 
updateActor(){
  this.isVisible=false;
  this.service.updateActor(this.body).subscribe()
  console.log(this.body);
  this.getActor();
  this.resetForm();
}
deleteActor(id:number){
  console.log(id,"delete Id");
  this.service.deleteActor(id).subscribe()
  this.getActor();
}

}