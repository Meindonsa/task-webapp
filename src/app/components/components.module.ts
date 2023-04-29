import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../module/prime-ng.module';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { NewAnnotationComponent } from './new-annotation/new-annotation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { FolderFormComponent } from './folder-form/folder-form.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    SearchComponent,
    NewAnnotationComponent,
    TaskFormComponent,
    NoteFormComponent,
    FolderFormComponent,
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    SearchComponent,
    NewAnnotationComponent,
    TaskFormComponent,
    NoteFormComponent,
    FolderFormComponent,
  ],
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
})
export class ComponentsModule {}
