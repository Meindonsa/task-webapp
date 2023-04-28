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
@NgModule({
  exports: [
    MenuModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    MegaMenuModule,
    InputTextModule,
    AccordionModule,
    DynamicDialogModule,
  ],
})
export class PrimeNgModule {}
