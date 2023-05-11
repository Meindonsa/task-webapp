import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output('outputUrl') outputUrl = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  putUrl(link: any) {
    this.outputUrl.emit(link);
  }
}
