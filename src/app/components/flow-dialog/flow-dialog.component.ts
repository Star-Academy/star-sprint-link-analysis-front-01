import {Component, Input, OnInit} from "@angular/core";
import {FlowService} from "../../../Service/Flow/flow.service";

@Component({
  selector: "app-flow-dialog",
  templateUrl: "./flow-dialog.component.html",
  styleUrls: ["./flow-dialog.component.scss"],
})
export class FlowDialogComponent implements OnInit{
  @Input() source!: string;
  @Input() target!: string;
  @Input() amount!: string;
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;
  private _isShow:boolean = false;
  constructor(private flowService:FlowService) {
  }
  ngOnInit() {
    this.flowService.flowComponent = this;
  }

  get isShow(): boolean {
    return this._isShow;
  }

  set isShow(value: boolean) {
    this._isShow = value;
  }
  onClose() {
    this._isShow = false;
  }
}
