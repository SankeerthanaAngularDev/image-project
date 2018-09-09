import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp.component';
import { LoginComponent } from './login.component';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [
    AppComponent, EmpComponent, LoginComponent, EventComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
