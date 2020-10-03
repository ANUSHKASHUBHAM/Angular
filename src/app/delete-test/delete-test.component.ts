import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { TestEntity } from '../test-entity';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

 

  constructor(private testservice:TestService) { }
  test:TestEntity=new TestEntity();
  tid:number;
  status:any
  submitted=false;
  ngOnInit(){
    this.submitted=false;
  }       
  
  delete() {
    this.testservice.deleteTest(this.tid)
      .subscribe(
        data => {
          this.status = data;        
          if(this.status){
            alert("deleted Successfully")
          }
          else{
            alert("Id not found")
          }
        },
        error => alert("ID not found"))
  }


}
