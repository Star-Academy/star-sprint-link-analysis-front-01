import { GraphResponseModel, Vertex } from './GraphResponseModel';

export default interface MaxFlowRequestModel {
  currentState: GraphResponseModel;
  source: Vertex;
  destination: Vertex;
}
