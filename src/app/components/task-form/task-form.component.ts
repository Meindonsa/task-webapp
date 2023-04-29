import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AnnotationService } from './../../services/tasks/annotation.service';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/common/alert/toast.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
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
    this.toastService.simpleSuccessToast('success', 'Tâche créée');
    this.ref.close();
    this.loading = false;
  }
}
