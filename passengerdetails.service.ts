import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Passengerdetails } from '../Models/passengerdetails.model';

@Injectable({
  providedIn: 'root'
})
export class PassengerdetailsService {
  baseUrl='https://localhost:51380/api/'
  constructor(private http:HttpClient) { }
  SavePassenger(passenger:Passengerdetails):Observable<Passengerdetails>{
    return this.http.post<Passengerdetails>(this.baseUrl+'PassengerDetails/SavePassengerDetails',passenger)
  }
}
