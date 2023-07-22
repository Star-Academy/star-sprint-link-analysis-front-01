import {AfterViewInit, Component, OnInit,} from '@angular/core';
import G6, {Graph} from '@antv/g6';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit,AfterViewInit{
  data = {
    nodes: [
      {
        id: 'node1',
        label: 'A',
      },
      {
        id: 'node2',
        label: 'B',
      },
      {
        id: 'node3',
        label: 'C',
      },
      {
        id: 'node4',
        label: 'D',
      },
      {
        id: 'node5',
        label: 'E',
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
        label: '100',
      },
      {
        source: 'node1',
        target: 'node3',
        label: '200',
      },
      {
        source: 'node1',
        target: 'node4',
        label: '450',
      },
      {
        source: 'node2',
        target: 'node3',
        label: '230',
      },
      {
        source: 'node2',
        target: 'node4',
        label: '230',
      },
      {
        source: 'node1',
        target: 'node5',
        label: '300',
      },
    ],
  };
  nodeData = {
    id: 'node1',
    x: 350,
    y: 270,
    label: 'A',
    type: 'circle',
    color: '#DDE6ED',
    style: {
      r: 25,
    },
  };
  graph?: Graph;
  ngOnInit(): void {
    const element = document.getElementById('container');
    this.graph = new Graph({
      nodeStateStyles: {
        // The node style when the state 'hover' is true
        hover: {
          fill: '#526D82',
        },
        // The node style when the state 'click' is true
        click: {
          stroke: '#000',
          lineWidth: 3,
        },
      },
      modes: {
        default: ['zoom-canvas', 'drag-canvas'], // Allow users to drag canvas, zoom canvas, and drag nodes
      },
      layout: {
        // Object, layout configuration. random by default
        type: 'radial',
        linkDistance: 150, // The edge length
        maxIteration: 1000,
        focusNode: 'node1',
        unitRadius: 150,
        preventOverlap: true, // nodeSize or size in data is required for preventOverlap: true
        nodeSize: 50,
        strictRadial: false,
        workerEnabled: true, // Whether to activate web-worker
      },
      defaultNode: {
        type: 'circle',
        color: 'hsl(184deg 67% 42%)',
        style: {
          r: 25,
          fill: 'hsl(184deg 67% 42%)'
        },
      },
      defaultEdge: {
        type: 'line',
        curveOffset: 30,
        curvePosition: 0.5,
        color: 'hsl(0 0% 100%)',
        style: {
          lineWidth: 2,
          endArrow: true,
          background:{
            fill:'#fff',
            padding: [10,10,10,10],
            radius: 2
          },
        },
        labelCfg: {
          // The properties for label of edges
          autoRotate: true, // Whether to rotate the label according to the edge
          style:{
            background:{
              fill:'#fff',
              padding: [2,2,2,2],
              radius: 2
            },
            fill: '#000',
          },
        },
      },
      container: 'container',
      width: element?.clientWidth,
      height: element?.clientHeight,
    });
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
