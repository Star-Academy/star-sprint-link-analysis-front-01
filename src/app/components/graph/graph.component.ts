import {AfterViewInit, Component, OnInit, ViewChild, ComponentRef,ViewContainerRef} from '@angular/core';
import {Graph} from '@antv/g6';
import {GraphService} from "../../../Service/Graph/graph.service";
import {UserinfoDialogComponent} from '../userinfo-dialog/userinfo-dialog.component'
@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('info', { read: ViewContainerRef, static: false })
  elementCreate!: ViewContainerRef;
  constructor(private graphService: GraphService) {
    }

    data = this.graphService.getData();
    graph?: Graph;

    ngOnInit(): void {
        const element: HTMLElement | null = document.getElementById('container');

        this.graphService.initGraph(element);
        this.graph = this.graphService.graph;

        this.graph.data(this.data);
        this.graph.render();
    }

    ngAfterViewInit(): void {
        this.graph?.on('node:mouseenter', (e) => {
            const nodeItem = e.item || ''; // Get the target item
            this.graph?.setItemState(nodeItem, 'hover', true); // Set the state 'hover' of the item to be true
          let pi:ComponentRef<UserinfoDialogComponent> = this.elementCreate.createComponent(UserinfoDialogComponent)
          pi.instance.name = e.item?.getModel().label + "";
          pi.instance.id = '11111111'
          pi.instance.cardId = '1111111'
          pi.instance.tp = e.canvasY + 100 + 'px';
          pi.instance.lft = e.canvasX + 150 + 'px';
        });
        this.graph?.on('node:mouseleave', (e) => {
            const nodeItem = e.item || ''; // Get the target item
            this.graph?.setItemState(nodeItem, 'hover', false); // Set the state 'hover' of the item to be false
          this.elementCreate.clear()
        });
        this.graph?.on('node:click', (e) => {
            console.log('meow');
        });
    }
}
