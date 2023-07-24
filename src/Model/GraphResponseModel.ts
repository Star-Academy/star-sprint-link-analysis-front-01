interface Branch {
  id: number;
  telephone: string;
  name: string;
  address: string;
}

interface owner {
  id: number;
  name: string;
  family: string;
}

export interface Vertex {
  id: number;
  cardId: string;
  sheba: string;
  accountType: number;
  branch: Branch;
  owner: owner;
}

interface Edge {
  source: number;
  destination: number;
  content: Content;
}

interface Content {
  id: number;
  sourceAccount: number;
  destinationAccount: number;
  transactionType: number;
  amount: number;
  date: string;
}

export interface GraphResponseModel {
  vertexCount: number;
  edgeCount: number;
  vertices: Vertex[];
  edges: Edge[];
}
