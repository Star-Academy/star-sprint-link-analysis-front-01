import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {UserSearchListComponent} from './user-search-list/user-search-list.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {AppModule} from "../../app.module";

import {SearchResultComponent} from './search-result/search-result.component';
import {CircleAvatarComponent} from "../circle-avatar/circle-avatar.component";
import {CircleAvatarModule} from "../circle-avatar/circle-avatar.module";


@NgModule({
    declarations: [
        SearchComponent,
        UserSearchListComponent,
        SearchBoxComponent,
        SearchResultComponent
    ],
    exports: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        CircleAvatarModule
    ]
})
export class SearchModule {
}
