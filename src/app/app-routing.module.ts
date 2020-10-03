import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { GetTestComponent } from './get-test/get-test.component';


const routes: Routes = [ 
  {path: "add-test", component: AddTestComponent},
  {path: "update-test", component: UpdateTestComponent},
  {path: "delete-test", component: DeleteTestComponent},
  {path: "get-test", component: GetTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
