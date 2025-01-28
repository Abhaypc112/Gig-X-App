
export interface IUser {
    _id?:string;
    email?: string;
    name?:string;
    password?: string;
    conformPassword?:string;
    description?:string;
    languages?:string[];
    profileImg?: string;
    isBlock?:boolean;
    googleId?: string;
    skills?: string[];
    experience?: string;
    role?:string,
    createdAt?:string;
  };