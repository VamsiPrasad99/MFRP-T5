import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../flights.service';
import { HomeComponent } from '../home/home.component';
import { OffersService } from '../offers.service';
import Swal from 'sweetalert2';
import { NavbarService } from '../navbar.service';
import { FooterService } from '../footer.service';


@Component({
  selector: 'app-booking ',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
// export class BookingComponent implements AfterViewInit{
//     name = 'Welcome Test';  
//   @ViewChild(HomeComponent) child:any; 
//   ngAfterViewInit() {  
//      this.name= this.child.name;  
//      }  
// }  

export class BookingComponent implements OnInit  {
 
  // date1 = '';  
  //   @ViewChild(HomeComponent)
  // child!: HomeComponent;
  //   ngAfterViewInit() {  
  //      this.date1= this.child.date;  
  //      } 

  public passengers = [1,2,3];
  titles =["Mr","Ms","Mrs"];
  selected = "option 1";
 public flightData : any[] = [];

 price:any;
 passenger :any;
 promo:any;
 totalprice:any;
  editservice = new FormGroup({
    // _id: new FormControl(''),
    flightID: new FormControl(''),
   flightName : new FormControl(''),
   arrival :new FormControl(''),
   departure :  new FormControl(''),
   arrivalTime :  new FormControl(''),
   departureTime : new FormControl(''),
   durationTime : new FormControl(''),
   price : new FormControl(''),
   title : new FormControl(''),
   fname : new FormControl(''),
   lname : new FormControl(''),
   email : new FormControl(''),
   phno : new FormControl(''),
   noofpassengers : new FormControl(''),
   title1 : new FormControl(''),
   fname1 : new FormControl(''),
   lname1 : new FormControl(''),
   title2 : new FormControl(''),
   fname2 : new FormControl(''),
   lname2 : new FormControl(''),
   fareprice : new FormControl(),
   discountedamount: new FormControl(''),
   totalprice : new FormControl()
  })



   constructor( private formbuilder:FormBuilder ,private router: ActivatedRoute ,private apii: FlightsService,private api:OffersService, private route :Router ,private http: HttpClient,public nav:NavbarService,public footer: FooterService) {
    this.nav.show();
    this.footer.show();
    //this.response1 = this.apii.getapi();
    //  this.editservice = this.formbuilder.group({
    //   phno : ['',(Validators.required)],
    //   email : ['',(Validators.required)]
    // })
    // }get formControls() {return this.editservice.controls;}
   }
   ngOnInit(): void {
    
     console.warn(this.router.snapshot.params['_id']);
     this.apii.getData(this.router.snapshot.params['_id']).subscribe((result: any)=>{
       this.editservice = new FormGroup({
        //  _id: new FormControl(result['_id']),
         flightID : new FormControl(result['flightID']),
         flightName : new FormControl(result['flightName']),
         arrival :new FormControl(result['arrival']),
         departure :  new FormControl(result['departure']),
         arrivalTime :  new FormControl(result['arrivalTime']),
         departureTime : new FormControl(result['departureTime']),
         durationTime : new FormControl(result['durationTime']),
         price : new FormControl(result['price']),
         title: new FormControl(result['title']),
         fname: new FormControl(result['fname']),
         lname : new FormControl(result['lname']),
         email : new FormControl(result['email']),
         phno : new FormControl(result['phno']),
         noofpassengers: new FormControl(result['noofpassengers']),
         title1: new FormControl(result['title1']),
         fname1 : new FormControl(result['fname1']),
         lname1 : new FormControl(result['lname1']),
         title2: new FormControl(result['title2']),
         fname2 : new FormControl(result['fname2']),
         lname2 : new FormControl(result['lname3']),
         fareprice: new FormControl(result['fareprice']),
         discountedamount : new FormControl(result['discountedamount']),
         totalprice : new FormControl(result['totalprice']),
        })
       console.warn(result);
        this.flightData.push(result);
        // this.flightData.push(result.price)
        console.warn(result.price)
        this.price = (result.price);

      //  console.warn(this.flightData[])
     })
     
   }
   offer(val:any){

     console.log(val.slice(4,7));
     this.api.getoffersapi().subscribe(result=>{
       //console.log(result)
       const user = result.find((a: any) => {
        return a.offercode === val
       })
 
        if (user ) {
          this.totalprice = ((this.price*this.passenger)-((val.slice(4,7))));
          alert("Promo code applied successfully of Rs" +(val.slice(4,7)))
     }
     else{
       alert("Promo code does not exist")
     }
     // this.promo =  (val.slice(4,7));
     
   })
  }
     
 
update(){
  // console.warn(this.editservice.value)
   this.http.post('http://localhost:8099/api/ticket',this.editservice.value)
      .subscribe((result: any) => {
        console.warn("result", result);
        console.warn(result._id);
        //alert('Your booking is successfully completed ');
        // this.route.navigate(["home"]);
      //  this.tictketid = result._id
      
      })
      this.editservice.reset();
      Swal.fire({
        title: 'booking is successfull',
        icon: 'success',
        // showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Back To Home',
        // cancelButtonText: 'Booking Details'
      }).then((result) => {
        if (result.value) {
          this.route.navigate(['home'])}
        // } else if (result.dismiss === Swal.DismissReason.cancel) {
        //   this.route.navigate("/bookingdetails"/${result[_id]});(`${this.url2}/${_id}`)
          
        // }
      })
  
}
  //  console.warn(this.editservice.value);
  //  this.apii.updateData(this.router.snapshot.params['_id'],this.editservice.value).subscribe((result)=>{
  //    console.warn(result);
  //    this.route.navigate(['prod-details']);
  //    // this.apii.getData(this.response1);
  //  })
  
 

 selectedPassengers!: string;
 public 1 : boolean ;
 public 2 : boolean ;
 public 3 : boolean ;
 
 doSomething(event:any) {
   console.log(event);
   this.passenger = (event.value);
  
   if(event.value=='1'){
    this.selectedPassengers='1';
  }
  else if(event.value=='2'){
    ( this.selectedPassengers = '2');
   
  }
  else if(event.value=='3'){
    this.selectedPassengers='3';
  }
 }
 changeLocation(event:any){
   console.log(event)
  console.warn(event.target.value)
  // if(event.target.value==1){
  //   this.selectedPassengers=this[1];
  // }
  // else if(event.target.value==2){
  //   this.selectedPassengers=this[2];
  // }

  
}


 
}




 
 

