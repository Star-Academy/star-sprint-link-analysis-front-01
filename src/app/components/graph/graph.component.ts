import {AfterViewInit, Component, OnInit,} from '@angular/core';
import {Graph} from '@antv/g6';
import {GraphService} from "../../../Service/Graph/graph.service";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {

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
        });
        this.graph?.on('node:mouseleave', (e) => {
            const nodeItem = e.item || ''; // Get the target item
            this.graph?.setItemState(nodeItem, 'hover', false); // Set the state 'hover' of the item to be false
        });
        this.graph?.on('node:click', (e) => {
            console.log('meow');
        });
    }
}
