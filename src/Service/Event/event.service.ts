import {Injectable} from '@angular/core';
import {Graph, IEdge, IG6GraphEvent, INode} from '@antv/g6';
import {UserService} from '../User/user.service';
import {UserInfoPopperService} from '../Popper/UserInfo/user-info-popper.service';
import {ExpandDialogPopperService} from '../Popper/ExpandDialog/expand-dialog-popper.service';
import {FlowService} from '../Flow/flow.service';
import {Vertex} from "../../Model/GraphResponseModel";

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private userService: UserService,
    private popper: UserInfoPopperService,
    private expandDialogPopperService: ExpandDialogPopperService,
    private flow: FlowService,
  ) {
  }

  public initialGraphEvents(graph: Graph): void {
    this.graphMouseEnterEvent(graph);
    this.graphMouseLeaveEvent(graph);
    this.graphMouseClickEvent(graph);
    this.graphSelectClick(graph);
    this.hideOnContainerClick(graph);
  }

  private graphSelectClick(graph: Graph): void {
    graph.on('node:click', (e) => {
      const selectedNodes: INode[] = this.getSelectedNodes(graph);

      if (selectedNodes.length > 2) {
        graph.setItemState(e.item || '', 'selected', false);
      }

      if (selectedNodes.length === 2) {
        const sourceId: number = parseInt(selectedNodes[0].getModel().id || '');
        const targetId: number = parseInt(selectedNodes[1].getModel().id || '');

        let source: Vertex | undefined = this.userService.findById(sourceId);
        let target: Vertex | undefined = this.userService.findById(targetId);

        this.flow.findMaxFlow(source, target);
      }
    });
  }

  private hideOnContainerClick(graph: Graph): void {

    graph.getContainer().onmousedown = () => {

      this.expandDialogPopperService.hide();
      this.popper.hide();
    };
  }

  private getSelectedNodes(graph: Graph): INode[] {

    return graph
      .getNodes()
      .filter((node:INode) => node.getStates().includes('selected'));
  }

  private graphMouseEnterEvent(graph: Graph):void {

    graph.on('node:mouseenter', (e) => {

      graph?.setItemState(e.item || '', 'hover', true);
      let user:Vertex | undefined = this.userService.users.find((item:Vertex):boolean => {

        return item.id === parseInt(e.item?._cfg?.id || '');
      });

      this.popper.show({
        id: user!.id.toString(),
        cardId: user!.cardId,
        name: user!.owner.name,

        top: e.clientY - 50,
        left: e.clientX + 150,
      });

    });
  }

  private graphMouseLeaveEvent(graph: Graph):void {

    graph.on('node:mouseleave', (e:IG6GraphEvent):void => {

      const nodeItem: INode | IEdge | "" = e.item || '';
      graph?.setItemState(nodeItem, 'hover', false);
      this.popper.hide();
    });
  }

  private graphMouseClickEvent(graph: Graph):void {

    graph.on('node:click', (e:IG6GraphEvent):void => {

      if (this.getSelectedNodes(graph).length == 1) {

        let user:Vertex | undefined = this.userService.findById(parseInt(e.item?._cfg?.id || ''));
        this.expandDialogPopperService.show({
          top: e.clientY,
          left: e.clientX - 250,
          name: user!.owner.name,
          cardId: user!.cardId,
          id: user!.id.toString(),
        });
      } else {
        this.expandDialogPopperService.hide();
      }
    });
  }
}
