import { AnnotationService } from './../../services/tasks/annotation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  tasksGroup: any = [];
  notesGroup: any = [];
  tasks: any = [];
  notes: any = [];
  search: any;

  constructor(private annotationService: AnnotationService) {}

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    this.tasks = this.annotationService.retrieveTasks();
    this.notes = this.annotationService.retrieveNotes();
    this.notesGroup = this.annotationService.retrieveNotesGroup();
    this.tasksGroup = this.annotationService.retrieveTasksGroup();
    console.log(this.tasksGroup);
  }
}
