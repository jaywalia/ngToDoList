import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../to-do-list';
import { Task } from '../task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  userName: string = 'Jay';
  toDoList = ToDoList;

  constructor() { }

  ngOnInit() {
  }

  addTask(title: string) : void {
    let t:Task = new Task(title, false) ;
    this.toDoList.push(t);
  }

}
