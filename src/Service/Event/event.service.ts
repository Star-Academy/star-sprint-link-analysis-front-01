import { Injectable } from '@angular/core';
import { Graph } from '@antv/g6';
import { UserService } from '../User/user.service';
import { UserInfoPopperService } from '../Popper/UserInfo/user-info-popper.service';
import { ExpandDialogPopperService } from '../Popper/ExpandDialog/expand-dialog-popper.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private userService: UserService,
    private popper: UserInfoPopperService,
    private expandDialogPopperService: ExpandDialogPopperService,
  ) {}

  public initialGraphEvents(graph: Graph): void {
    this.graphMouseEnterEvent(graph);
    this.graphMouseLeaveEvent(graph);
    this.graphMouseClickEvent(graph);
  }

  private graphMouseEnterEvent(graph: Graph) {
    graph.on('node:mouseenter', (e) => {
      graph?.setItemState(e.item || '', 'hover', true);
      let user = this.userService.users.find((item) => {
        return item.id === parseInt(e.item?._cfg?.id || '');
      });
      this.popper.show({
        top: e.clientY,
        left: e.clientX + 100,
        name: user!.owner.name,
        cardId: user!.cardId,
        id: user!.id.toString(),
      });
    });
  }

  private graphMouseLeaveEvent(graph: Graph) {
    graph.on('node:mouseleave', (e) => {
      const nodeItem = e.item || '';
      graph?.setItemState(nodeItem, 'hover', false);
      this.popper.hide();
    });
  }

  private graphMouseClickEvent(graph: Graph) {
    graph.on('node:click', (e) => {
      let user = this.userService.findById(parseInt(e.item?._cfg?.id || ""))
      this.expandDialogPopperService.show({
        top: e.clientY,
        left: e.clientX - 250,
        name: user!.owner.name,
        cardId: user!.cardId,
        id: user!.id.toString(),
      });
    });
  }
}
