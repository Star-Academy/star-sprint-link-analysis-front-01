import { Component } from "@angular/core";
import { SearchService } from "../../../Service/Search/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [],
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}
  onTxtChange(value: string) {
    if (value.length === 10) {
      this.searchService.getById(parseInt(value));
    }
  }
}
