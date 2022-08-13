import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountUserService } from './services/count-user.service';
import { UserService } from './services/user.service';
import { InactiveStatusComponent } from './components/inactive-status/inactive-status.component';
import { ActiveStatusComponent } from './components/active-status/active-status.component';

@NgModule({
  declarations: [
    AppComponent,
    InactiveStatusComponent,
    ActiveStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, CountUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
