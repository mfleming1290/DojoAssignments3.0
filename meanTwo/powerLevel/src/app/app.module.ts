import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponentComponent } from './power-component/human-component/human-component.component';
import { SaiyanComponentComponent } from './power-component/saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './power-component/super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanTwoComponentComponent } from './power-component/super-saiyan-two-component/super-saiyan-two-component.component';
import { SuperSaiyanThreeComponentComponent } from './power-component/super-saiyan-three-component/super-saiyan-three-component.component';
import { SuperSaiyanFourComponentComponent } from './power-component/super-saiyan-four-component/super-saiyan-four-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SuperSaiyanTwoComponentComponent,
    SuperSaiyanThreeComponentComponent,
    SuperSaiyanFourComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
