import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SearchComponent } from '../search/search.component';
import { NewAnnotationComponent } from '../new-annotation/new-annotation.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  openSearch() {
    this.ref = this.dialogService.open(SearchComponent, {
      width: '70%',
      draggable: true,
      dismissableMask: true,
    });
  }

  openAddAnnotation() {
    this.ref = this.dialogService.open(NewAnnotationComponent, {
      header: "Choix de l'annotation",
      width: '50%',
      dismissableMask: true,
    });
  }
}
