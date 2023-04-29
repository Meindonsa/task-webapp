import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  exports: [
    MenuModule,
    ToastModule,
    ButtonModule,
    EditorModule,
    DialogModule,
    MenubarModule,
    TabViewModule,
    MegaMenuModule,
    SplitterModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    AccordionModule,
    DynamicDialogModule,
  ],
})
export class PrimeNgModule {}
