import { Component, HostListener, Input } from '@angular/core';
import { Vertex } from '../../../../Model/GraphResponseModel';
import { SearchService } from '../../../../Service/Search/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() user!: Vertex;
  @Input() onItemSelected!: (item: Vertex) => void;

  constructor(private searchService: SearchService) {}

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    this.onItemSelected(this.user);
  }
}
