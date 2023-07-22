import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import {NgxPopperjsModule} from "ngx-popperjs";



@NgModule({
    declarations: [
        GraphComponent
    ],
    exports: [
        GraphComponent
    ],
  imports: [
    CommonModule,
    NgxPopperjsModule
  ]
})
export class GraphModule { }
