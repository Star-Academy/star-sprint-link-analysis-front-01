import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SearchService } from '../../../../Service/Search/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;

  @Output() txtChange = new EventEmitter<string>();

  private _searchPhrase: string = '';

  constructor(private searchService: SearchService) {}

  public onChange(): void {
    this.txtChange.emit(this._searchPhrase);
  }
  get searchPhrase(): string {
    return this._searchPhrase;
  }

  set searchPhrase(value: string) {
    this._searchPhrase = value;
  }
}
