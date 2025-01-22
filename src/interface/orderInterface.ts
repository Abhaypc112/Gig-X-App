import { IGig } from "./gigInterface";
import { IUser } from "./userInterface";

export interface IGigPlan {
    plan : string;
    price : number;
    time : string;
}

export interface IOrder {
    _id ?: string;
    gigId : IGig;
    gigPlan : IGigPlan;
    userId?: IUser;
    paymentStatus : boolean;
    createdAt?:string;
    orderStatus?:boolean;
}