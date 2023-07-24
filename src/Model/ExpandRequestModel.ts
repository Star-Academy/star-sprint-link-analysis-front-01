import {GraphResponseModel, Vertex} from "./GraphResponseModel";

export default interface ExpandRequestModel {
  currentState:GraphResponseModel,
  maxLength:number,
  vertex:Vertex
}
