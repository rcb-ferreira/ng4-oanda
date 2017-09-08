import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, 
  MdCheckboxModule, 
  MdIconModule, 
  MdInputModule, 
  MdProgressSpinnerModule, 
  MdToolbarModule, 
  MdMenuModule,
  MdSidenavModule,
  MdCardModule,
  MdListModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdIconModule, 
    MdInputModule, 
    MdProgressSpinnerModule, 
    MdToolbarModule, 
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule],
  exports: [CommonModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdIconModule, 
    MdInputModule, 
    MdProgressSpinnerModule, 
    MdToolbarModule, 
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule],
})
export class MaterialModule { }