import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  getActor(){
    return this.http.get('http://localhost:4000/actors');
  }

  getActorById(id:number){
    // const url="http://localhost:4000/get/"
    return this.http.get('http://localhost:4000/get/'+id);
  }

  createActor(body:any){
    return this.http.post('http://localhost:4000/insert',body);
  }
  updateActor(body:any){
    return this.http.put('http://localhost:4000/update',body);
  }
  deleteActor(Delid:number){ 
    return this.http.put('http://localhost:4000/delete',{id:Delid});
  }
}
