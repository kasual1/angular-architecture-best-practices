import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [CommonModule, HttpClientModule, RouterModule],
})
export class SharedModule {}
