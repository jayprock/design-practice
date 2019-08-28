import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  todos = [
    'Todo #1',
    'Todo #2',
    'Todo #3',
    'Todo #4',
    'Todo #5'
  ]

  todos2 = [
    'Todo #2',
    'Todo #4',
    'Todo #5'
  ]
  
  done = [
    'Todo #1',
    'Todo #3'
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, 
                        event.container.data, 
                        event.previousIndex, 
                        event.currentIndex);
    }
  }

}
