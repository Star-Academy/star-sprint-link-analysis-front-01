import {Injectable} from '@angular/core';
import {Graph} from "@antv/g6";
import {ApiService} from "../Api/api.service";

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    private _graph!: Graph;


    constructor(private api: ApiService) {
    }


    get graph(): Graph {
        return this._graph;
    }

    set graph(value: Graph) {
        this._graph = value;
    }

    public initGraph(element: HTMLElement | null): void {
        this._graph = new Graph({
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
                default: ['zoom-canvas', 'drag-canvas', 'drag-node'], // Allow users to drag canvas, zoom canvas, and drag nodes
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
                    background: {
                        fill: '#fff',
                        padding: [10, 10, 10, 10],
                        radius: 2
                    },
                },
                labelCfg: {
                    // The properties for label of edges
                    autoRotate: true, // Whether to rotate the label according to the edge
                    style: {
                        background: {
                            fill: '#fff',
                            padding: [2, 2, 2, 2],
                            radius: 2
                        },
                        fill: '#000',
                    },
                },
            },
            container: element?.id || "container",
            width: element?.clientWidth,
            height: element?.clientHeight,
        });
    }

    public getData() {
        let nodes: Array<any> = [];
        let edges: any[] = [];

        const response = this.api.initGraph(3000000271);

        console.log(response);
        response.subscribe((data) => {

            let nodes: any[] = [];
            for (let vertex of data.vertices) {
                nodes.push({
                    id: vertex.id.toString(),
                    label: vertex.owner.name
                })
            }

            let edges: any[] = [];
            for (let edge of data.edges) {
                edges.push({
                    source: edge.source.toString(),
                    target: edge.destination.toString(),
                    label: "200"
                })
            };

            this.graph.data({
                nodes: nodes,
                edges: edges
            })
            this.graph.render();
        });

    }
}
