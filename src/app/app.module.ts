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
import { CartPageComponent } from './cart-page/cart-page.component';
import { AddCartService } from './add-cart.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bucks', component: BucksPageComponent },
  { path: 'does', component: DoesPageComponent },
  { path: 'kids', component: KidsPageComponent },
  { path: 'cart', component: CartPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KidsPageComponent,
    DoesPageComponent,
    BucksPageComponent,
    NavbarComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AddCartService],
  bootstrap: [AppComponent]
})

export class AppModule { }
