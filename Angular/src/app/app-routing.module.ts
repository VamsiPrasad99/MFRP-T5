import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { BookedticketsComponent } from './bookedtickets/bookedtickets.component';
import { BookingComponent } from './booking/booking.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FlightsComponent } from './flights/flights.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { OffersComponent } from './offers/offers.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'flights',component:FlightsComponent},
  {path:'home',component:HomeComponent},
  {path:'booking/:_id',component:BookingComponent},
  {path:'offers',component:OffersComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'offerdetails/:_id',component:OfferdetailsComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'update/:_id',component:UpdateComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminui',component:AdminuiComponent},
  {path:'bookedtickets',component:BookedticketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
