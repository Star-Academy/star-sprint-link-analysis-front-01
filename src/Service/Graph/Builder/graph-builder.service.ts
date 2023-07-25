import { Injectable } from "@angular/core";
import { Graph } from "@antv/g6";

@Injectable({
  providedIn: "root",
})
export class GraphBuilderService {
  nodeStateStyles = {
    hover: {
      fill: "#526D82",
    },
    click: {
      stroke: "#000",
      lineWidth: 3,
    },
  };
  modes = {
    default: ["zoom-canvas", "drag-canvas", "drag-node"],
  };
  layout = {
    type: "force2",
    linkDistance: 150,
    // maxIteration: 1000,
    focusNode: "node1",
    unitRadius: 150,
    preventOverlap: true,
    nodeSize: 50,
    strictRadial: false,
    workerEnabled: true,
  };
  defaultNode = {
    type: "circle",
    color: "hsl(184deg 67% 42%)",
    style: {
      r: 25,
      fill: "hsl(184deg 67% 42%)",
    },
  };

  defaultEdge = {
    type: "line",
    curveOffset: 30,
    curvePosition: 0.5,
    color: "hsl(0 0% 100%)",
    preventOverlap: true,
    style: {
      lineWidth: 2,
      endArrow: true,
      background: {
        fill: "#fff",
        padding: [10, 10, 10, 10],
        radius: 2,
      },
    },
    labelCfg: {
      // The properties for label of edges
      autoRotate: true, // Whether to rotate the label according to the edge
      style: {
        background: {
          fill: "#fff",
          padding: [2, 2, 2, 2],
          radius: 2,
        },
        fill: "#000",
      },
    },
  };

  constructor() {}

  public buildGraph(element: HTMLElement | null): Graph {
    if (element === null) throw new Error("Element is null");
    return new Graph({
      nodeStateStyles: this.nodeStateStyles,
      modes: this.modes,
      layout: this.layout,
      defaultNode: this.defaultNode,
      defaultEdge: this.defaultEdge,

      container: element?.id || "container",
      width: element?.clientWidth,
      height: element?.clientHeight,
      fitView: true,
      fitViewPadding: [20, 40, 100, 20],
      fitCenter: true,
      animate: true,
    });
  }
}
