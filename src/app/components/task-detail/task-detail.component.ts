import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  annotation: any;
  title: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.annotation = this.data;
    this.title = this.annotation?.label;
  }

  ngOnInit(): void {}
}
