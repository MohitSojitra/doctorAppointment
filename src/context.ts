import { Request, response } from "express";
import { EventRepository } from "./repository/event/EventRepository";
import { JWTRepository } from "./repository/jwt/JWTRepository";

import { UserRepository } from "./repository/user/UserRepository";

interface Icontext {
  _jwt: JWTRepository;
  _userRepository: UserRepository;
  _eventRepository: EventRepository;

  getUserId(): any;
  storeEventImage(): void;
}

class Context implements Icontext {
  private _request: Request;
  private _response: Response;

  public _jwt: JWTRepository = JWTRepository.getInstance();
  public _userRepository: UserRepository = UserRepository.getInstance();
  public _eventRepository: EventRepository = EventRepository.getInstance();

  constructor(req: Request, res: Response) {
    this._request = req;
    this._response = res;
  }

  public async getUserId() {
    try {
      const { token, userId }: any = this._jwt.extractUserIdfromReq(
        this._request,
      );
      // console.log
      return { token, userId };
    } catch (e) {
      // console.log({ error: e });
      throw new Error(`${e.message}` || "Invalid Token");
    }
  }

  public async storeEventImage() {
    const formData = this._request.body;
    console.log(formData);
  }
}

export { Context, Icontext };
