import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus: any = [];
  constructor() {}

  ngOnInit(): void {
    this.menus = [
      {
        icon: 'pi pi-home',
        label: 'Home',
        path: '/dashboard',
      },
      {
        icon: 'pi pi-user',
        label: 'Utilisateur',
        path: '/user',
      },
      {
        icon: 'pi pi-home',
        label: 'Home',
        path: '/dashboard',
      },
      {
        icon: 'pi pi-home',
        label: 'Home',
        path: '/dashboard',
      },
    ];
  }
}
