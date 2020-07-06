import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing';
import { SignUpComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';


@NgModule({
  declarations: [LoginComponent,SignUpComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class AuthModule { }
