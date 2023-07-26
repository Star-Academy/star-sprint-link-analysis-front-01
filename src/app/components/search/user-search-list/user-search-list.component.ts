import {Component, Input} from '@angular/core';
import {Vertex} from "../../../../Model/GraphResponseModel";
import {SearchService} from "../../../../Service/Search/search.service";

@Component({
    selector: 'app-user-search-list',
    templateUrl: './user-search-list.component.html',
    styleUrls: ['./user-search-list.component.scss'],
})
export class UserSearchListComponent {

    @Input() onItemSelected!: (item: Vertex) => void
    @Input() isOpen!: boolean;


    constructor(private searchService: SearchService) {
        searchService.searchResultComponent = this;
    }


    private _userList: Vertex[] = [];

    public hide() {
        this.isOpen = false;
    }

    public show() {
        this.isOpen = true;
    }

    get userList(): Vertex[] {
        return this._userList;
    }

    set userList(value: Vertex[]) {
        this._userList = value;
    }
}
