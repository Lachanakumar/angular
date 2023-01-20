import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SessionModule { }
