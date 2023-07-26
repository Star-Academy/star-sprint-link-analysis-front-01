import { Injectable } from "@angular/core";
import { ApiService } from "../Api/api.service";
import { GraphService } from "../Graph/graph.service";
import { UserSearchListComponent } from "../../app/components/search/user-search-list/user-search-list.component";
import { Vertex } from "../../Model/GraphResponseModel";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private _searchResultComponent!: UserSearchListComponent;

  constructor(
    private graphService: GraphService,
    private api: ApiService,
  ) {}

  public getById(id: number): void {
    this.graphService.getInitGraph(id);
  }

  public searchByName(name: string): void {
    this.api.searchByName(name).subscribe((data: Vertex[]): void => {
      this._searchResultComponent.show();
      this._searchResultComponent.userList = data;
    });
  }

  public hideSearchResult(): void {
    this._searchResultComponent.hide();
  }

  set searchResultComponent(value: UserSearchListComponent) {
    this._searchResultComponent = value;
  }
}
