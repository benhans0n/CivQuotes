import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaCentauriComponent } from './alpha-centauri/alpha-centauri.component';
import { CivBeComponent } from './civ-be/civ-be.component';
import { CivIvComponent } from './civ-iv/civ-iv.component';
import { CivVComponent } from './civ-v/civ-v.component';
import { CivViComponent } from './civ-vi/civ-vi.component';

const routes: Routes = [
  { path: '', redirectTo: 'alpha-centauri', pathMatch: 'full', data: { title: 'Civ Quotes' } },
  { path: 'alpha-centauri', component: AlphaCentauriComponent, data: { title: 'Sid Meier\'s Alpha Centauri Quotes' } },
  { path: 'civ-iv', component: CivIvComponent, data: { title: 'Civilization IV Quotes' } },
  { path: 'civ-v', component: CivVComponent, data: { title: 'Civilization V Quotes' } },
  { path: 'civ-be', component: CivBeComponent, data: { title: 'Civilization: Beyond Earth Quotes' } },
  { path: 'civ-vi', component: CivViComponent, data: { title: 'Civilization VI Quotes' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
