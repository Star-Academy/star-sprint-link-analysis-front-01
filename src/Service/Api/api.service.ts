import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GraphResponseModel, Vertex } from "../../Model/GraphResponseModel";
import { Observable } from "rxjs";
import {
  expandEndPoint,
  maxFlowEndPoint,
  serverUrl,
  transactionVisualizerEndpoint,
} from "../../constants";
import ExpandRequestModel from "../../Model/ExpandRequestModel";
import { LoadingService } from "../Loading/loading.service";
import MaxFlowRequestModel from "../../Model/MaxFlowRequestModel";
import MaxFlowResponseModel from "../../Model/MaxFlowResponseModel";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private _currentState!: GraphResponseModel;

  constructor(
    private client: HttpClient,
    private loading: LoadingService,
  ) {}

  public initGraph(id: number): Observable<GraphResponseModel> {
    this.loading.showLoading();
    let response: Observable<GraphResponseModel> =
      this.client.post<GraphResponseModel>(transactionVisualizerEndpoint, {
        accountId: id,
      });
    this.setState(response);
    return response;
  }

  public expandGraph(
    vertex: Vertex | undefined,
    maxLength: number,
  ): Observable<GraphResponseModel> {
    if (vertex) {
      this.loading.showLoading();

      let requestBody: ExpandRequestModel = {
        currentState: this._currentState,
        maxLength: maxLength,
        vertex: vertex,
      };

      let response: Observable<GraphResponseModel> =
        this.client.post<GraphResponseModel>(expandEndPoint, requestBody);

      this.setState(response);
      return response;
    }
    throw new Error("User Not Found");
  }

  public maxFlow(
    source: Vertex,
    destination: Vertex,
  ): Observable<MaxFlowResponseModel> {
    let request: MaxFlowRequestModel = {
      currentState: this._currentState,
      source: source,
      destination: destination,
    };

    return this.client.post<MaxFlowResponseModel>(maxFlowEndPoint, request);
  }

  public searchByName(name: string): Observable<Vertex[]> {
    return this.client.get<Vertex[]>(serverUrl + "account", {
      params: {
        query: name,
      },
    });
  }

  public setState(response: Observable<GraphResponseModel>): void {
    response.subscribe((data: GraphResponseModel): void => {
      this._currentState = data;
    });
  }
}
