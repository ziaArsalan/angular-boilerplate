import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [],
})
export class AuthModule { }
