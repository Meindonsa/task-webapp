import { Component, OnInit } from '@angular/core';
import { AnnotationService } from 'src/app/services/tasks/annotation.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  title: string = 'Tout';
  tasksGroup: any = [];
  groupSelected: any;
  tasks: any = [];
  annotation: any;

  constructor(private annotationService: AnnotationService) {}

  ngOnInit(): void {
    this.retrieveData();
  }
  retrieveData() {
    this.tasks = this.annotationService.retrieveTasks().slice(0, 5);
    this.tasksGroup = this.annotationService.retrieveTasksGroup();
  }

  displayTasks(group: any) {
    this.title = group.name;
    this.tasks = group.annotations;
    this.groupSelected = group;
  }

  checkTask(annotation: any) {
    this.annotation = annotation;
  }
}
