import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoteFormComponent } from '../note-form/note-form.component';
import { FolderFormComponent } from '../folder-form/folder-form.component';

@Component({
  selector: 'app-new-annotation',
  templateUrl: './new-annotation.component.html',
  styleUrls: ['./new-annotation.component.scss'],
})
export class NewAnnotationComponent {
  // ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private ref: DynamicDialogRef
  ) {}

  openTaskForm() {
    this.ref.close();
    this.ref = this.dialogService.open(TaskFormComponent, {
      header: 'Ajouter une tâche',
      width: '45%',
      draggable: true,
      baseZIndex: -1,
    });
  }

  openNoteForm() {
    this.ref.close();
    this.ref = this.dialogService.open(NoteFormComponent, {
      header: 'Ajouter une note',
      width: '45%',
      draggable: true,
    });
  }

  openFolderForm() {
    this.ref.close();
    this.ref = this.dialogService.open(FolderFormComponent, {
      header: 'Ajouter un groupe',
      width: '45%',
      draggable: true,
    });
  }
}
