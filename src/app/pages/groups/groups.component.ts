import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnotationService } from 'src/app/services/tasks/annotation.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  title: string = 'Tout';
  tasksGroup: any = [];
  groupSelected: any;
  tasks: any = [];
  annotation: any;
  status: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private annotationService: AnnotationService
  ) {}

  ngOnInit(): void {
    this.status = this.activatedRoute.snapshot.params['status'];
    this.retrieveData();
  }
  retrieveData() {
    this.tasks = this.annotationService.retrieveTasks().slice(0, 5);
    this.tasksGroup = this.annotationService.retrieveTasksGroup();
  }

  retrieveUlr(event: any) {
    this.status = event;
    console.log(this.status);
  }

  displayTasks(group: any) {
    this.router.navigate(['/tasks'], { state: { folder: group } });
  }

  checkTask(annotation: any) {
    this.annotation = annotation;
  }
}
