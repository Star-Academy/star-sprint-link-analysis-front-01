import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GraphResponseModel, Vertex} from '../../Model/GraphResponseModel';
import { Observable } from 'rxjs';
import {expandEndPoint, serverUrl, transactionVisualizerEndpoint} from '../../constants';
import ExpandRequestModel from "../../Model/ExpandRequestModel";
import {LoadingService} from "../Loading/loading.service";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _currentState!:GraphResponseModel;
  constructor(private client: HttpClient,private loading:LoadingService) {}
  public initGraph(id: number): Observable<GraphResponseModel> {
    this.loading.showLoading();
    let response = this.client.post<GraphResponseModel>(transactionVisualizerEndpoint, {
      accountId: id,
    });
    this.setState(response);
    return response;
  }
  public expandGraph(vertex:Vertex | undefined,maxLength:number):Observable<GraphResponseModel>
  {
    if (vertex)
    {
      this.loading.showLoading()
      let requestBody:ExpandRequestModel = {
        currentState: this._currentState,
        maxLength:maxLength,
        vertex:vertex
      }
      let response:Observable<GraphResponseModel> = this.client.post<GraphResponseModel>(expandEndPoint,requestBody)
      this.setState(response);
      return response;
    }
    throw new Error("User Not Found");
  }
  private setState(response: Observable<GraphResponseModel>) {
    response.subscribe((data) => {
      console.log("subscribed");
      console.log(data)
      this._currentState = data;
      setInterval(() => {
        this.loading.hideLoading();
      }, 100);
    })
  }
}
