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
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AlphaCentauriComponent } from './alpha-centauri/alpha-centauri.component';
import { CivIvComponent } from './civ-iv/civ-iv.component';
import { CivVComponent } from './civ-v/civ-v.component';
import { CivBeComponent } from './civ-be/civ-be.component';
import { CivViComponent } from './civ-vi/civ-vi.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaCentauriComponent,
    CivIvComponent,
    CivVComponent,
    CivBeComponent,
    CivViComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'alpha-centauri', pathMatch: 'full' },
      { path: 'alpha-centauri', component: AlphaCentauriComponent },
      { path: 'civ-iv', component: CivIvComponent },
      { path: 'civ-v', component: CivVComponent },
      { path: 'civ-be', component: CivBeComponent },
      { path: 'civ-vi', component: CivViComponent }
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
