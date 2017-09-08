import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdProgressSpinnerModule],
  exports: [CommonModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdProgressSpinnerModule],
})
export class MaterialModule { }