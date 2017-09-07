import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule],
  exports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule],
})
export class MaterialModule { }