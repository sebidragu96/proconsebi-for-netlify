import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VizualizareComponent } from './vizualizare/vizualizare.component';
import { ContactComponent } from './contact/contact.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ProiecteComponent } from './proiecte/proiecte.component';
import { RedirectComponent } from './redirect/redirect.component';
import { DesignComponent } from './design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    VizualizareComponent,
    ContactComponent,
    AcasaComponent,
    ProiecteComponent,
    RedirectComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
