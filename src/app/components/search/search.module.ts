import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { UserSearchListComponent } from "./user-search-list/user-search-list.component";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { CircleAvatarModule } from "../circle-avatar/circle-avatar.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchComponent,
    UserSearchListComponent,
    SearchBoxComponent,
    SearchResultComponent,
  ],
  exports: [SearchComponent],
  imports: [CommonModule, CircleAvatarModule, FormsModule],
})
export class SearchModule {}
