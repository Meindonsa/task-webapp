import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MegaMenuItem[];

  constructor() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
      },
    ];
  }

  ngOnInit(): void {}
}
