import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsComponent } from './flights/flights.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';

import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { OffersComponent } from './offers/offers.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { UpdateComponent } from './update/update.component';
import { AddflightComponent } from './addflight/addflight.component';
import { BookedticketsComponent } from './bookedtickets/bookedtickets.component';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    ContactusComponent,
    HomeComponent,
    BookingComponent,
    OffersComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    OfferdetailsComponent,
    BookingdetailsComponent,
    AdminuiComponent,
    UpdateComponent,
    AddflightComponent,
    BookedticketsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
