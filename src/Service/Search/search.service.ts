import { Injectable } from "@angular/core";
import { ApiService } from "../Api/api.service";
import { GraphResponseModel } from "../../Model/GraphResponseModel";
import { GraphService } from "../Graph/graph.service";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(
    private graphService: GraphService,
  ) {}
  public getById(id: number) {
    this.graphService.getInitGraph(id);
  }
}
