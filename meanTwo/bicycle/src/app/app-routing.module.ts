import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import {AuthGuard } from './auth.guard'
import { ListingComponent } from "./listing/listing.component";
import { BrowseComponent } from "./browse/browse.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: 'listing',
      component: ListingComponent,
      canActivate: [AuthGuard] 
      },
      {
      path: 'browse',
      component: BrowseComponent,
      canActivate: [AuthGuard] 
    },
    ] 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
