import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../module/prime-ng.module';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { NewAnnotationComponent } from './new-annotation/new-annotation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    SearchComponent,
    NewAnnotationComponent,
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    SearchComponent,
    NewAnnotationComponent,
  ],
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
})
export class ComponentsModule {}
