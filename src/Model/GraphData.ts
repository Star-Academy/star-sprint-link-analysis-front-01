export interface Node {
    id: string,
    label: string,
}

export interface Edge {
    source: string,
    target: string,
    label: string,
}

export default interface GraphData {
    nodes: Node[];
    edges: Edge[];
}
