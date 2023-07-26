import { TestBed } from "@angular/core/testing";
import { ConverterService } from "./converter.service";
import { GraphResponseModel } from "../../Model/GraphResponseModel";

describe("ConverterService", (): void => {
  let service: ConverterService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterService);
  });

  it("should be created", (): void => {
    expect(service).toBeTruthy();
  });
  it("should convert node server responses to graph node", (): void => {
    const testGraphResponse: GraphResponseModel = {
      vertices: [
        {
          id: 1,
          cardId: "5028060000000450",
          sheba: "IR252294848342000000450",
          accountType: 0,
          branch: {
            id: 0,
            telephone: "55185212",
            name: "پارک بهمن",
            address:
              "تهران-میدان بهمن-خیابان شهید علیرضا وفایی-شهرداری منطقه 16",
          },
          owner: {
            id: 3697634884,
            name: "ناصر",
            familyName: "نجفی",
          },
        },
        {
          id: 2,
          cardId: "5028060000000450",
          sheba: "IR252294848342000000450",
          accountType: 0,
          branch: {
            id: 0,
            telephone: "55185212",
            name: "پارک بهمن",
            address:
              "تهران-میدان بهمن-خیابان شهید علیرضا وفایی-شهرداری منطقه 16",
          },
          owner: {
            id: 3697634884,
            name: "ناصر",
            familyName: "نجفی",
          },
        },
        {
          id: 3,
          cardId: "5028060000000450",
          sheba: "IR252294848342000000450",
          accountType: 0,
          branch: {
            id: 0,
            telephone: "55185212",
            name: "پارک بهمن",
            address:
              "تهران-میدان بهمن-خیابان شهید علیرضا وفایی-شهرداری منطقه 16",
          },
          owner: {
            id: 3697634884,
            name: "ناصر",
            familyName: "نجفی",
          },
        },
      ],
      vertexCount: 1,
      edgeCount: 0,
      edges: [
        {
          source: 1,
          destination: 2,
          content: {
            id: 1,
            sourceAccount: 1,
            destinationAccount: 2,
            transactionType: 1,
            amount: 1000,
            date: "2021-07-01T00:00:00",
          },
        },
        {
          source: 1,
          destination: 3,
          content: {
            id: 2,
            sourceAccount: 1,
            destinationAccount: 3,
            transactionType: 1,
            amount: 1000,
            date: "2021-07-01T00:00:00",
          },
        },
      ],
    };

    const testNode =
      service.convertNodeServerResponsesToGraphNode(testGraphResponse);
    const testEdges =
      service.convertEdgeServerResponsesToGraphEdge(testGraphResponse);

    expect(testNode).toEqual([
      { id: "1", label: "ناصر" },
      { id: "2", label: "ناصر" },
      { id: "3", label: "ناصر" },
    ]);
    expect(testEdges).toEqual([
      { source: "1", target: "2", label: "1000" },
      { source: "1", target: "3", label: "1000" },
    ]);
  });
});
