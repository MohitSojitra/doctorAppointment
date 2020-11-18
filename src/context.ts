import { Request, response } from "express";
import { JWTRepository } from "./repository/jwt/JWTRepository";
import { UserRepository } from "./repository/user/UserRepository";

interface Icontext {
  _jwt: JWTRepository;
  _userRepository: UserRepository;
  getUserId(): any;
}

class Context implements Icontext {
  private _request: Request;
  private _response: Response;

  public _jwt: JWTRepository = JWTRepository.getInstance();
  public _userRepository: UserRepository = UserRepository.getInstance();

  constructor(req: Request, res: Response) {
    this._request = req;
    this._response = res;
  }

  public async getUserId() {
    try {
      const { token, userId }: any = this._jwt.extractUserIdfromReq(
        this._request,
      );

      return { token, userId };
    } catch (e) {
      throw new Error(`${e.message}` || "Invalid Token");
    }
  }
}

export { Context, Icontext };
