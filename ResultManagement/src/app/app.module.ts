import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ComponentsModule} from './components/components.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
