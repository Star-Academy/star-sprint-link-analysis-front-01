import { Component, Input, ViewChild } from "@angular/core";
import { SearchService } from "../../../Service/Search/search.service";
import { Vertex } from "../../../Model/GraphResponseModel";
import { SearchBoxComponent } from "./search-box/search-box.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [],
})
export class SearchComponent {
  @Input() isSearchResultOpen: boolean = false;
  @ViewChild(SearchBoxComponent)
  searchBoxComponentElementRef!: SearchBoxComponent;
  public searchPhrase: string = "";

  constructor(private searchService: SearchService) {}

  public onTxtChange(value: string): void {
    if (value.length === 10 && !isNaN(parseInt(value))) {
      this.searchService.getById(parseInt(value));
    } else {
      this.isSearchResultOpen = true;
      this.searchService.searchByName(value);
    }
  }

  public onSearchResultSelected(item: Vertex): void {
    this.searchService.hideSearchResult();
    this.searchService.getById(item.id);
  }
}
