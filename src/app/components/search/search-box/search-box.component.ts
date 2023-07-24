import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { SearchService } from "../../../../Service/Search/search.service";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"],
})
export class SearchBoxComponent {
  constructor(private searchService: SearchService) {}
  searchPhrase: string = "";
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;
  @Output() txtChange = new EventEmitter<string>();
  onChange(): void {
    this.txtChange.emit(this.searchPhrase);
  }
}
