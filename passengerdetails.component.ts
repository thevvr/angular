import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Passengerdetails } from 'src/app/Models/passengerdetails.model';
import { PassengerdetailsService } from 'src/app/Services/passengerdetails.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {
  bookform = new FormGroup({
    name : new FormControl('', Validators.required),
    address : new FormControl('',[Validators.required ]),
    age : new FormControl('' , [Validators.required , ]),
    gender : new FormControl('',Validators.required),
    quotaType : new FormControl('',Validators.required),
    ClassType : new FormControl('',Validators.required) , 
    seatNo: new FormControl('',Validators.required) 
  });

  constructor(private shareservice:SharedService,private pservice:PassengerdetailsService) { }
  addpassenger:Passengerdetails={
    PassengerId:0,
    UserId:0,
    PassengerName:'',
    PassengerAddress:'',
    PassengerAge:0,
    Gender:'',
    Quota_Type:'',
    Class_Type:'',
    SeatNo:0,

  }

  ngOnInit(): void {
    
    
  }
  book(){
    this.addpassenger.UserId=this.shareservice.userId;
    this.addpassenger.PassengerName=String(this.bookform.get('name')?.value);
    this.addpassenger.PassengerAddress=String(this.bookform.get('address')?.value);
    this.addpassenger.PassengerAge=Number(this.bookform.get('age')?.value);
    this.addpassenger.Gender=String(this.bookform.get('gender')?.value);
    this.addpassenger.Quota_Type=String(this.bookform.get('quotaType')?.value);
    this.addpassenger.Class_Type=String(this.bookform.get('classType')?.value);
    this.addpassenger.SeatNo=Number(this.bookform.get('seatno')?.value);
    console.log(this.addpassenger);
    this.pservice.SavePassenger(this.addpassenger)
    .subscribe(
      Response=>{
        console.log(this.addpassenger);
        //this.pservice.SavePassenger(this.addpassenger)
      }
    )

  }

}
