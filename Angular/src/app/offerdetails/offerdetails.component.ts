import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offerdetails',
  templateUrl: './offerdetails.component.html',
  styleUrls: ['./offerdetails.component.css']
})
export class OfferdetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,private apii:OffersService,public nav :NavbarService,public footer : FooterService) {
    this.nav.show();
    this.footer.show();
   }

  public offerdetails: any[] = [];
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['_id']);
    this.apii.offergetData(this.router.snapshot.params['_id']).subscribe((result: any)=>{
      console.log(result);
      this.offerdetails.push(result);
  })
}


}
