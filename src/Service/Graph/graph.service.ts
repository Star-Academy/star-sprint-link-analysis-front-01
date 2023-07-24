import {Injectable} from '@angular/core';
import {Graph} from "@antv/g6";
import {ApiService} from "../Api/api.service";
import {ConverterService} from "../Converter/converter.service";
import {GraphResponseModel} from "../../Model/GraphResponseModel";
import {Observable} from "rxjs";
import {LoadingService} from "../Loading/loading.service";
import {UserService} from "../User/user.service";
import {UserInfoPopperService} from "../Popper/user-info-popper.service";

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    private _graph!: Graph;

    constructor(private api: ApiService, private converter: ConverterService, private userService: UserService, private loading: LoadingService, private popper: UserInfoPopperService) {
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
            fitView: true,
            fitViewPadding: [20, 40, 100, 20],
            fitCenter: true,

        });
    }

    public graphEvents() {
        this.graph.on('node:mouseenter', (e) => {
            const nodeItem = e.item || '';
            this.graph?.setItemState(nodeItem, 'hover', true);
            let user = this.userService.users.find((item) => {
                return item.id === parseInt(e.item?._cfg?.id || "")
            })
            this.popper.show({
                top: e.clientY,
                left: e.clientX + 100,
                name: user!.owner.name,
                cardId: user!.cardId,
                id: user!.id.toString()
            });
        });

        this.graph.on('node:mouseleave', (e) => {
            const nodeItem = e.item || '';
            this.graph?.setItemState(nodeItem, 'hover', false);
            this.popper.hide();
        });
        this.graph.on('node:click', (e) => {

        });
    }

    public renderGraph(response: Observable<GraphResponseModel>): void {
        response.subscribe((data) => {
            this.userService.users = data.vertices;
            this.graph.data({
                nodes: this.converter.convertNodeServerResponsesToGraphNode(data),
                edges: this.converter.convertEdgeServerResponsesToGraphEdge(data)
            })
            this.graph.render();
        });
        setInterval(() => {
            this.loading.hideLoading();
        }, 100)


    }

    public getInitGraph(id: number = 3000000271) {
        this.loading.showLoading();
        const response = this.api.initGraph(id);
        this.renderGraph(response);
    }
}
