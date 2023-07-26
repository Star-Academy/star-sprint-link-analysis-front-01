import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../../../../Service/Search/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;
  @Input() searchPhrase: string = '';

  @Output() txtChange = new EventEmitter<string>();

  constructor(private searchService: SearchService) {}

  public onChange(): void {
    this.txtChange.emit(this.searchPhrase);
  }
}
