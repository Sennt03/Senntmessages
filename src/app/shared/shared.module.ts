import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniAlertComponent } from './components/mini-alert/mini-alert.component';
import { MaterialModule } from '@material/material.module';
import { CreateDatePipe } from './pipes/create-date.pipe';
import { CreateHourPipe } from './pipes/create-hour.pipe';



@NgModule({
  declarations: [
    MiniAlertComponent,
    CreateDatePipe,
    CreateHourPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MiniAlertComponent,
    CreateDatePipe,
    CreateHourPipe
  ]
})
export class SharedModule { }
