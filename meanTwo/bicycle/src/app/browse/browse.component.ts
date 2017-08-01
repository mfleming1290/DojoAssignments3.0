import { Component, OnInit } from '@angular/core';
import { SearchPipe } from "../search.pipe";
import { Bicycle } from "../bicycle";
import { BicycleService } from "../services/bicycle.service";
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
    bicycles: Array<Bicycle> = [];
    selectedBike: Bicycle;
    userId = this.cookieService.get('userID')
    filter: Bicycle = new Bicycle();
    
    constructor( private bicycleService: BicycleService, private cookieService: CookieService) {
       
    }

    contact(email, name) {
      console.log(email, name)
      window.alert('name:    ' + name + '      email:    ' + email)
    }

    ngOnInit() {
        this.getBikes();
    }

    getBikes() {
        this.bicycleService.getBikes()
        .then(bicycles => {
            console.log('getting bicycles from the server');
            console.log(bicycles)
            this.bicycles = bicycles;
        })
        .catch(console.log)
    }


    selectBicycle(bicycle) {
        this.selectedBike = bicycle === this.selectedBike ? null: bicycle;        
    }

  

    

    deleteBicycle(bicycle: Bicycle) {
        console.log('in del book ', bicycle, bicycle._id);
        // const idx = this.books.indexOf(book);
        // this.books.splice(idx, 1);        
        this.bicycleService.removeBike(bicycle._id)
        .then(() => this.bicycles.splice(this.bicycles.indexOf(bicycle, 1)))
        // .then(() => this.selectBook(book))
        .catch(console.log)
        
    }

    

}
