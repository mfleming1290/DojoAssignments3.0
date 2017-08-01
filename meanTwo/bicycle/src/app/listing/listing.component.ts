import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { BicycleService } from "../services/bicycle.service";
import { Bicycle } from "../bicycle";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
    userId = this.cookieService.get('userID')
    bicycle = new Bicycle()
    bicycles: Bicycle[] = []
    creationErrors: string[] = [];
    bike = new Bicycle()
    selectedBike: Bicycle;




  constructor(private cookieService: CookieService, private bicycleService: BicycleService) { }

  onSubmit(bicycle: Bicycle) {
    bicycle.postedBy = this.userId
    console.log(bicycle)
    this.bicycleService.addBike(bicycle)
    .then((book) => this.bicycles.push(book))
    .catch(response => this.handleErrors(response.json())) 

  }

  getBikes() {
    this.bicycleService.getBikesById()
    .then((bikes) => {
      this.bicycles = bikes
    })
    .catch(console.log)

  }

  deleteBike(bicycle: Bicycle) {
        console.log('in del bike ', bicycle, bicycle._id);      
        this.bicycleService.removeBike(bicycle._id)
        .then(() => this.bicycles.splice(this.bicycles.indexOf(bicycle, 1)))
        .catch(console.log)
        
    }
  private handleErrors(errors: string[] | Error) {
    this.creationErrors = Array.isArray(errors) ? errors : [errors.message]
  }

  ngOnInit() {
    this.getBikes()
  }

  onUpdate(bicycle: Bicycle) {
        console.log('updating bicycle', bicycle);
        this.selectBike(bicycle)
        this.bicycleService.updateBike(bicycle)
        .then((bicycle) => {
          this.bicycles.splice(this.bicycles.indexOf(this.selectedBike), 1, bicycle)
        })
        .catch(response => this.handleErrors(response.json())) 

    }

    selectBike(bicycle) {
        this.selectedBike = bicycle === this.selectedBike ? null: bicycle;        
    }

}
