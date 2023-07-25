import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GraphService } from '../../../Service/Graph/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, AfterViewInit {
  constructor(private graphService: GraphService) {}

  ngOnInit(): void {
    const element: HTMLElement | null = document.getElementById('container');
    this.graphService.initGraph(element);
  }

  ngAfterViewInit(): void {
    this.graphService.graphEvents();
  }
}
