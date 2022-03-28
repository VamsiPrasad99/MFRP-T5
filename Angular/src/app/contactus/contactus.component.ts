import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public nav: NavbarService, public footer : FooterService) { 
    this.nav.show();
    this.footer.show();
  }

  ngOnInit(): void {
  }

}
