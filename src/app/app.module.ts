import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTestComponent } from './add-test/add-test.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTestComponent } from './update-test/update-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { GetTestComponent } from './get-test/get-test.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    UpdateTestComponent,
    DeleteTestComponent,
    GetTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
