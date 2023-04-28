import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
