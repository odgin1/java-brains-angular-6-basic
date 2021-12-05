import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildAComponent } from './child-a/child-a.component';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ViewModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ChildBComponent,
    ChildAComponent
  ],
  providers: [TestService,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
