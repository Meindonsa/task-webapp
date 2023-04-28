import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../main/main.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PrimeNgModule } from '../module/prime-ng.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [CommonModule, MainRoutingModule, PrimeNgModule, ComponentsModule],
})
export class MainModule {}
