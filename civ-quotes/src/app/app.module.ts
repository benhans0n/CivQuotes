import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AlphaCentauriComponent } from './alpha-centauri/alpha-centauri.component';
import { CivFourComponent } from './civ-four/civ-four.component';
import { CivFiveComponent } from './civ-five/civ-five.component';
import { CivBeComponent } from './civ-be/civ-be.component';
import { CivSixComponent } from './civ-six/civ-six.component';

@NgModule({
  declarations: [
    AppComponent,
    CivFourComponent,
    CivFiveComponent,
    CivBeComponent,
    CivSixComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'alpha-centauri', component: AlphaCentauriComponent},
      {path: 'civ-four', component: CivFourComponent},
      {path: 'civ-five', component: CivFiveComponent},
      {path: 'civ-be', component: CivBeComponent},
      {path: 'civ-six', component: CivSixComponent},
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
