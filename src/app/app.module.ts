import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { DoesPageComponent } from './does-page/does-page.component';
import { BucksPageComponent } from './bucks-page/bucks-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'bucks', component: BucksPageComponent},
  {path: 'does', component: DoesPageComponent },
  {path: 'kids', component: KidsPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KidsPageComponent,
    DoesPageComponent,
    BucksPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
