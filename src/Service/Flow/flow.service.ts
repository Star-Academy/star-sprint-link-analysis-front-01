import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {Vertex} from "../../Model/GraphResponseModel";

@Injectable({
    providedIn: 'root'
})
export class FlowService {

    constructor(private api: ApiService) {
    }

    public findMaxFlow(source: Vertex | undefined, destination: Vertex | undefined) {
        console.log("source & destination", source, destination);
        if (source && destination) {
            let reponse = this.api.maxFlow(source, destination);
            reponse.subscribe((data) => {
                console.log("Max Flow");
                console.log(data);
            });
        } else throw  new Error("Source or Destination is not defined");
    }
}
