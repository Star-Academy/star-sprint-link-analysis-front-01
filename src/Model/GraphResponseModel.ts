interface Branch {
    id : number;
    telephone : string;
    name : string;
    address : string;


}

interface owner {
    id : number;
    name : string;
    family : string;
}

interface Vertex {
    id: number;
    cardId: string;
    sheba : string;
    accountType : number;
    branch : Branch;
    owner : owner;

}

interface GraphResponseModel {
    vertexCount: number;
    edgeCount: number;
    vertices: Vertex[];
}