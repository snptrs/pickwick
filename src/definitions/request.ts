import { Request } from "express";
export interface UserInfoReq extends Request {
  user: {
    id: string;
  };
}
