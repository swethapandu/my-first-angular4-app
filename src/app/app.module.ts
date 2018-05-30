import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NametagComponent } from './nametag/nametag.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NametagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
