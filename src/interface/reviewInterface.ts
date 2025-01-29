import { IUser } from "./userInterface";

export interface IReview {
    _id?:string,
    rating:number;
    gigId:string;
    userId?:IUser;
    comment:string;
    createdAt?:string;
}