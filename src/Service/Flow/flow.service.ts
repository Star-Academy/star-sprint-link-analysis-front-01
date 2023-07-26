import { Injectable } from '@angular/core';
import { ApiService } from '../Api/api.service';
import { Vertex } from '../../Model/GraphResponseModel';
import { FlowDialogComponent } from '../../app/components/flow-dialog/flow-dialog.component';
import {Observable} from "rxjs";
import MaxFlowResponseModel from "../../Model/MaxFlowResponseModel";

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  private _flowComponent!: FlowDialogComponent;
  constructor(private api: ApiService) {}

  public findMaxFlow(
    source: Vertex | undefined,
    destination: Vertex | undefined,
  ) {
    console.log('source & destination', source, destination);
    if (source && destination) {

      let response:Observable<MaxFlowResponseModel> = this.api.maxFlow(source, destination);
      response.subscribe((data:MaxFlowResponseModel):void => {

        this._flowComponent.isShow = true;
        this._flowComponent.source = source.id.toString();
        this._flowComponent.target = destination.id.toString();
        this._flowComponent.amount = data.maxFlow.toString();
      });
    } else throw new Error('Source or Destination is not defined');
  }

  get flowComponent(): FlowDialogComponent {
    return this._flowComponent;
  }

  set flowComponent(value: FlowDialogComponent) {
    this._flowComponent = value;
  }
}
