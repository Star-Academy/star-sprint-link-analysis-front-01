import {Component, ViewChild} from '@angular/core';
import {style, trigger} from "@angular/animations";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: []



})
export class SearchComponent {
    public isCollapsed = false;


    public toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;

    }

}
