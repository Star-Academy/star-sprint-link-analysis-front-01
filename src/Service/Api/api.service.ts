import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GraphResponseModel, Vertex} from "../../Model/GraphResponseModel";
import {Observable} from "rxjs";
import {expandEndPoint, maxFlowEndPoint, transactionVisualizerEndpoint} from "../../constants";
import ExpandRequestModel from "../../Model/ExpandRequestModel";
import {LoadingService} from "../Loading/loading.service";
import MaxFlowRequestModel from "../../Model/MaxFlowRequestModel";
import MaxFlowResponseModel from "../../Model/MaxFlowResponseModel";

//TODO : Check serve error and show to user
@Injectable({
    providedIn: "root",
})
export class ApiService {
    private _currentState!: GraphResponseModel;

    constructor(
        private client: HttpClient,
        private loading: LoadingService,
    ) {
    }

    public initGraph(id: number): Observable<GraphResponseModel> {
        this.loading.showLoading();
        let response = this.client.post<GraphResponseModel>(
            transactionVisualizerEndpoint,
            {
                accountId: id,
            },
        );
        this.setState(response);
        return response;
    }

    public expandGraph(
        vertex: Vertex | undefined,
        maxLength: number,
    ): Observable<GraphResponseModel> {
        if (vertex) {
            this.loading.showLoading();
            let requestBody: ExpandRequestModel = {
                currentState: this._currentState,
                maxLength: maxLength,
                vertex: vertex,
            };
            let response: Observable<GraphResponseModel> =
                this.client.post<GraphResponseModel>(expandEndPoint, requestBody);
            this.setState(response);
            return response;
        }
        throw new Error("User Not Found");
    }


    public maxFlow(source: Vertex, destination: Vertex): Observable<MaxFlowResponseModel> {
        let request: MaxFlowRequestModel = {
            currentState: this._currentState,
            source: source,
            destination: destination,
        }
        console.log('request')
        console.log(request)
        let response = this.client.post<MaxFlowResponseModel>(maxFlowEndPoint, request);
        return response;
    }

    public setState(response: Observable<GraphResponseModel>) {
        response.subscribe((data) => {
            this._currentState = data;
        });
    }

}
