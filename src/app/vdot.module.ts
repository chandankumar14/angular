import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VdotRoutingModule } from './vdot-routing.module';
import { VdotComponent } from './vdot.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material/material.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    VdotComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    VdotRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [VdotComponent]
})
export class VdotModule { }
