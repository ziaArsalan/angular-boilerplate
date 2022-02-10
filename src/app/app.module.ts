import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

// Modules
import { ComponentModule } from './components/component.module';
import { AuthModule } from './pages/auth/auth.module';

// Components
import { AppComponent } from './app.component';

// Services
import { MainService } from './_services';
import { FormComponent } from './pages/form/form.component';
import { ChildComponent } from './pages/form/child/child.component';
import { SubmitComponent } from './pages/form/submit/submit.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChildComponent,
    SubmitComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ComponentModule,
    AuthModule,
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
