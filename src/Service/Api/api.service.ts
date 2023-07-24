import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GraphResponseModel } from "../../Model/GraphResponseModel";
import { Observable } from "rxjs";
import { serverUrl, transactionVisualizerEndpoint } from "../../constants";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private client: HttpClient) {}

  public initGraph(id: number): Observable<GraphResponseModel> {
    return this.client.post<GraphResponseModel>(transactionVisualizerEndpoint, {
      accountId: id,
    });
  }
}
