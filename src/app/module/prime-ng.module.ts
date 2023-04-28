import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
  ],
})
export class PrimeNgModule {}
