import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  group: any;

  constructor(private location: Location) {}

  ngOnInit(): void {
    const state = history.state;
    this.group = state['folder'];
    console.log(this.group);
  }
  back(): void {
    this.location.back();
  }
}
