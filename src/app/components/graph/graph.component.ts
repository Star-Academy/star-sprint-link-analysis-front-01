import {AfterViewInit, Component, OnInit,} from '@angular/core';
import {GraphService} from "../../../Service/Graph/graph.service";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
    public data: any;

    constructor(private graphService: GraphService) {
    }


    ngOnInit(): void {
        const element: HTMLElement | null = document.getElementById('container');
        this.graphService.initGraph(element);
        this.graphService.getInitGraph();
    }

    ngAfterViewInit(): void {
        // this.graphService.graph.on('node:click', (e) => {
        //     alert("a")
        // });
        this.graphService.graphEvents();
    }
}
