import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';

@NgModule({
  declarations: [DragAndDropComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    DragAndDropRoutingModule
  ]
})
export class DragAndDropModule { }
