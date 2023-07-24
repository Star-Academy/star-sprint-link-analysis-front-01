import { Injectable } from '@angular/core';
import { Graph } from '@antv/g6';
import { ApiService } from '../Api/api.service';
import { ConverterService } from '../Converter/converter.service';
import {GraphResponseModel, Vertex} from '../../Model/GraphResponseModel';
import { Observable } from 'rxjs';
import { LoadingService } from '../Loading/loading.service';
import { UserService } from '../User/user.service';
import { EventService } from '../Event/event.service';
import { GraphBuilderService } from './Builder/graph-builder.service';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  private _graph!: Graph;

  constructor(
    private api: ApiService,
    private converter: ConverterService,
    private userService: UserService,
    private eventService: EventService,
    private graphBuilder: GraphBuilderService,
  ) {}

  get graph(): Graph {
    return this._graph;
  }

  set graph(value: Graph) {
    this._graph = value;
  }

  public initGraph(element: HTMLElement | null): void {
    this._graph = this.graphBuilder.buildGraph(element);
  }

  public graphEvents() {
    this.eventService.initialGraphEvents(this.graph);
  }

  public renderGraph(response: Observable<GraphResponseModel>): void {
    response.subscribe((data) => {
      this.userService.users = data.vertices;
      this.graph.data({
        nodes: this.converter.convertNodeServerResponsesToGraphNode(data),
        edges: this.converter.convertEdgeServerResponsesToGraphEdge(data),
      });
      this.graph.render();
    });
  }
  public expandGraph(id: number,maxLength:number)
  {
    let user:Vertex | undefined = this.userService.findById(id)
    this.graph.clear();
    const response:Observable<GraphResponseModel> = this.api.expandGraph(user,maxLength);
    this.renderGraph(response);

  }
  public getInitGraph(id: number) {
    const response:Observable<GraphResponseModel> = this.api.initGraph(id);
    this.renderGraph(response);
  }
}
