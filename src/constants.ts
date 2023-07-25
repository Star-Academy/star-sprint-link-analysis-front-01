export const serverUrl: string = 'http://192.168.36.85:5109/';
import {GraphResponseModel} from "./Model/GraphResponseModel";
import MaxFlowResponseModel from "./Model/MaxFlowResponseModel";

// export const serverUrl: string = "http://0.0.0.0:5109/";
export const transactionVisualizerEndpoint: string =
    serverUrl + "TransactionVisualizer";
export const expandEndPoint: string = serverUrl + "expand";
export const maxFlowEndPoint: string = serverUrl + "max-flow-calculator";

export const testGraphResponse: GraphResponseModel = {
    vertexCount: 7,
    edgeCount: 6,
    vertices: [
        {
            id: 1000000426,
            cardId: "6395997000000420",
            sheba: "IR748526805151000000426",
            accountType: 1,
            branch: {
                id: 0,
                telephone: "88659442",
                name: "میدان عطار",
                address: "تهران-بالاتر از میدان ونک-خیابان عطار-عطار-پلاک 3",
            },
            owner: {
                id: 6279263908,
                name: "یگانه",
                familyName: "عسگرپور",
            },
        },
        {
            id: 1000000460,
            cardId: "6221063000000460",
            sheba: "IR194897568891000000460",
            accountType: 1,
            branch: {
                id: 0,
                telephone: "22686205",
                name: "پل رومی",
                address: "تهران-خيابان شريعتی-بالاتر از پل رومی-شماره 1833",
            },
            owner: {
                id: 1444234357,
                name: "نیلوفر",
                familyName: "باقرپور",
            },
        },
        {
            id: 7000000105,
            cardId: "6219862000000100",
            sheba: "IR190025908487000000105",
            accountType: 2,
            branch: {
                id: 0,
                telephone: "26219547",
                name: "آفریقا شمالی",
                address:
                    "تهران-خیابان نلسون ماندلا (جردن)-بالاتر از خیابان اسفندیار-نبش شمالی خیابان سعیدی-پلاک 158",
            },
            owner: {
                id: 1296269903,
                name: "ارزو",
                familyName: "کیانی",
            },
        },
        {
            id: 5000000233,
            cardId: "6104330000000230",
            sheba: "IR508173741225000000233",
            accountType: 1,
            branch: {
                id: 0,
                telephone: "76340070",
                name: "گیلاوند دماوند",
                address: "تهران-گیلاوند-بلوار آیت اله خامنه ای-پلاک 2154",
            },
            owner: {
                id: 260932113,
                name: "فرشید",
                familyName: "فریبرزی",
            },
        },
        {
            id: 2000000450,
            cardId: "5028060000000450",
            sheba: "IR252294848342000000450",
            accountType: 0,
            branch: {
                id: 0,
                telephone: "55185212",
                name: "پارک بهمن",
                address: "تهران-میدان بهمن-خیابان شهید علیرضا وفایی-شهرداری منطقه 16",
            },
            owner: {
                id: 3697634884,
                name: "ناصر",
                familyName: "نجفی",
            },
        },
        {
            id: 2000000255,
            cardId: "6104336000000250",
            sheba: "IR313240390862000000255",
            accountType: 1,
            branch: {
                id: 0,
                telephone: "-55381005",
                name: "مهدیه تهران",
                address: "تهران-خیابان ولیعصر-بالاتر از چهار‌راه معز السلطان-پلاک 527",
            },
            owner: {
                id: 8561533357,
                name: "مروارید",
                familyName: "ابراهیم نژاد",
            },
        },
        {
            id: 5000000011,
            cardId: "6037709000000010",
            sheba: "IR386213858785000000011",
            accountType: 2,
            branch: {
                id: 0,
                telephone: "66062062",
                name: "خیابان آزادی شادمهر",
                address: "تهران-خیابان آزادی-بین بهبودی و شادمهر",
            },
            owner: {
                id: 9318930747,
                name: "هومن",
                familyName: "خانی",
            },
        },
    ],
    edges: [
        {
            source: 1000000426,
            destination: 1000000460,
            content: {
                id: 53214759157,
                sourceAccount: 1000000426,
                destinationAccount: 1000000460,
                transactionType: 2,
                amount: 570000,
                date: "11/12/2018",
            },
        },
        {
            source: 1000000426,
            destination: 7000000105,
            content: {
                id: 91388106948,
                sourceAccount: 1000000426,
                destinationAccount: 7000000105,
                transactionType: 2,
                amount: 4320000,
                date: "10/11/2018",
            },
        },
        {
            source: 1000000426,
            destination: 5000000233,
            content: {
                id: 80305384608,
                sourceAccount: 1000000426,
                destinationAccount: 5000000233,
                transactionType: 0,
                amount: 647720000,
                date: "7/8/2019",
            },
        },
        {
            source: 1000000426,
            destination: 2000000450,
            content: {
                id: 12760901872,
                sourceAccount: 1000000426,
                destinationAccount: 2000000450,
                transactionType: 2,
                amount: 950000,
                date: "8/11/2018",
            },
        },
        {
            source: 1000000426,
            destination: 2000000255,
            content: {
                id: 40559476931,
                sourceAccount: 1000000426,
                destinationAccount: 2000000255,
                transactionType: 1,
                amount: 2570000,
                date: "04/23/2019",
            },
        },
        {
            source: 1000000426,
            destination: 5000000011,
            content: {
                id: 33678336731,
                sourceAccount: 1000000426,
                destinationAccount: 5000000011,
                transactionType: 2,
                amount: 820000,
                date: "02/20/2018",
            },
        },
    ],
};
export const testMaxFlowResponseModel: MaxFlowResponseModel = {
    maxFlow: 200000,
}
