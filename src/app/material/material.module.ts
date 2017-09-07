import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule],
  exports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule],
})
export class MaterialModule { }