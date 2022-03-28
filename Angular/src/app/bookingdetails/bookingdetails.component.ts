import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { Ticketdata } from '../ticketdata';
import { TicketdataService } from '../ticketdata.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
public TicketData: any[] = [];
  // public response: Observable<Ticketdata[]>;
  constructor(private router : ActivatedRoute, private apii : TicketdataService,public nav: NavbarService,public footer:FooterService) { 
    // this.response = this.apii.getticketdataapi();
    // this.apii.getticketdataapi().subscribe(data => {
    //    console.log(data)
    
    // })
    this.footer.show();
    this.nav.show();
  }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params['_id']);
    // this.apii.getticketData(this.router.snapshot.params['_id']).subscribe((result: any)=>{
    //   console.warn(result)
    // })
  }

  getdetails(val:any){
    this.apii.getticketdataapi().subscribe((data: any) => {
      console.log(data);
      this.TicketData = []
      for (let i = 0; i < data.length; i++)
      // {
      //   console.warn(source==data[i].arrival || destination==data[i].destination)
      // }
      {
        if (val == data[i].phno) {
          this.apii.getticketData(data[i]._id).subscribe((result: any) => {
            console.warn(result);
            this.TicketData.push(result);
            // this.response = (result);

          })
        }
   
  }

    }
    )}}
