import { Component, OnInit } from '@angular/core';
import { AnnotationService } from 'src/app/services/tasks/annotation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tasksGroup: any = [];
  notesGroup: any = [];
  tasks: any = [];
  notes: any = [];
  search: any;

  constructor(private annotationService: AnnotationService) {}

  ngOnInit(): void {
    this.retrieveData();
  }

  toggle() {}

  retrieveData() {
    this.tasks = this.annotationService.retrieveTasks().slice(0, 5);
    this.notes = this.annotationService.retrieveNotes().slice(0, 5);
    this.notesGroup = this.annotationService.retrieveNotesGroup().slice(0, 4);
    this.tasksGroup = this.annotationService.retrieveTasksGroup().slice(0, 4);
  }
}
