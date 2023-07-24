import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CircleAvatarComponent } from "./circle-avatar.component";

@NgModule({
  declarations: [CircleAvatarComponent],
  exports: [CircleAvatarComponent],
  imports: [CommonModule],
})
export class CircleAvatarModule {}
