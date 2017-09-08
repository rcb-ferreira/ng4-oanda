import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, 
  MdCheckboxModule, 
  MdIconModule, 
  MdInputModule, 
  MdProgressSpinnerModule, 
  MdToolbarModule, 
  MdMenuModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdIconModule, 
    MdInputModule, 
    MdProgressSpinnerModule, 
    MdToolbarModule, 
    MdMenuModule],
  exports: [CommonModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdIconModule, 
    MdInputModule, 
    MdProgressSpinnerModule, 
    MdToolbarModule, 
    MdMenuModule],
})
export class MaterialModule { }