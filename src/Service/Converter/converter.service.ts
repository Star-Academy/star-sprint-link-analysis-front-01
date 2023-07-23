import {Injectable} from '@angular/core';
import {GraphResponseModel} from "../../Model/GraphResponseModel";

@Injectable({
    providedIn: 'root'
})
export class ConverterService {

    constructor() {
    }

    public convertNodeServerResponsesToGraphNode(data: GraphResponseModel): any[] {
        let nodes: any[] = [];
        for (let vertex of data.vertices) {
            nodes.push({
                id: vertex.id.toString(),
                label: vertex.owner.name
            })
        }

        return nodes;

    }

    public convertEdgeServerResponsesToGraphEdge(data: GraphResponseModel): any[] {
        let edges: any[] = [];
        for (let edge of data.edges) {
            edges.push({
                source: edge.source.toString(),
                target: edge.destination.toString(),
                label: edge.content.amount.toString()
            })
        }
        ;

        return edges;

    }
}
