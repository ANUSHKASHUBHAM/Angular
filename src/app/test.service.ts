import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'}
)
export class TestService {
  
  constructor( private http: HttpClient)
   { 
    
  }
  addTest(test:Object): Observable<Object>
  {
  
  return this.http.post("http://localhost:8082/onlinetestmanagementsystem/add",test); 
  }
  updateTest(testId:number,test:Object):Observable<Object>{
    return this.http.put(`http://localhost:8082/onlinetestmanagementsystem/update/${testId}`,test);
  }
  getTest(testId:number):Observable<Object>{
    return this.http.get("http://localhost:8082/onlinetestmanagementsystem/getTest/"+testId,{ responseType: 'text' });   
  }
  deleteTest(testId: number): Observable<any> {  
    return this.http.delete("http://localhost:8082/onlinetestmanagementsystem/remove/"+testId, { responseType: 'text' });  
  }  


}
