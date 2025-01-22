import { IGig } from "./gigInterface";

export interface IGigPlan {
    plan : string;
    price : number;
    time : string;
}

export interface IOrder {
    _id ?: string;
    gigId : IGig;
    gigPlan : IGigPlan;
    paymentStatus : boolean;
    createdAt?:string;
    orderStatus?:boolean;
}