import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PublicationService } from './services/publication.service';
import { InstituteService } from './services/institute.service';
import { InstituteListComponent } from './components/institute/institute-list/institute-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstituteDetailComponent } from './components/institute/institute-detail/institute-detail.component';
import { SecretaryDetailComponent } from './components/institute/secretary/secretary-detail/secretary-detail.component';
import { PublicationDetailComponent } from './components/institute/publication/publication-detail/publication-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InstituteListComponent,
    NavbarComponent,
    InstituteDetailComponent,
    SecretaryDetailComponent,
    PublicationDetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
