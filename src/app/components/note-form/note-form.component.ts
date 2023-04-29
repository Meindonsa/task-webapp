import { Component, OnInit } from '@angular/core';
import { AnnotationService } from 'src/app/services/tasks/annotation.service';
import { ToastService } from 'src/app/services/common/alert/toast.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  minDateValue = new Date();
  value: Date | undefined;
  taskGroup: any = [];
  loading = false;

  constructor(
    private ref: DynamicDialogRef,
    private toastService: ToastService,
    private annotationService: AnnotationService
  ) {}

  ngOnInit(): void {
    this.taskGroup = this.annotationService.retrieveTasksGroup();
  }

  create() {
    this.loading = true;
    this.toastService.simpleSuccessToast('success', 'Note créée');
    this.ref.close();
    this.loading = false;
  }
}
