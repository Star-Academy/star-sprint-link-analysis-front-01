import {Component, OnInit,HostListener} from '@angular/core';
import OverlayComponent from '../../../Model/OverlayComponent';
import {ExpandDialogPopperService} from "../../../Service/Popper/ExpandDialog/expand-dialog-popper.service";
import {GraphService} from "../../../Service/Graph/graph.service";

@Component({
  selector: 'app-expand-overlay',
  templateUrl: './expand-overlay.component.html',
  styleUrls: ['./expand-overlay.component.scss'],
})
export class ExpandOverlayComponent implements OverlayComponent,OnInit {
  public isShow: boolean = false;
  public top: string = '0px';
  public left: string = '0px';
  maxLength:number = 0;
  id!:number;
  isShiftDown:boolean = false;
  constructor(private expandPopper:ExpandDialogPopperService,private graphService:GraphService) {
  }
  show(): void {
    if (!this.isShiftDown)
    {
      this.isShow = true;
    }
  }

  hide(): void {
    this.isShow = false;
  }

  setAttribute(context: any): void {
    this.id = parseInt(context.id);
  }

  setPosition(tp: number, lft: number): void {
    this.top = tp + 'px';
    this.left = lft + 'px';
  }
  onExpand() {
    this.graphService.expandGraph(this.id,this.maxLength)
    this.isShow = false;
  }
  onClose() {
    this.isShow = false;
  }
  ngOnInit(): void {
    this.expandPopper.component = this;
  }
  @HostListener('document:keydown.shift',["$event"])
  shiftDown(e:KeyboardEvent){
    if(e.shiftKey)
    {
      this.isShiftDown = true;
    }
  }
  @HostListener('document:keyup.shift',["$event"])
  shiftUp(e:KeyboardEvent) {
    if(!e.shiftKey)
    {
      this.isShiftDown = false;
    }
  }
}
