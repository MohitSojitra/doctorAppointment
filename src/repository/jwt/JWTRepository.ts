import * as jwt from "jsonwebtoken";
import { environment } from "../../environment";
import { Request } from "express";

class JWTRepository {
  private static instance: JWTRepository;

  // generate token
  /**
   *
   * @param userId
   */
  public generateToken(userId: any): string {
    return `JWT ${jwt.sign({ payload: userId }, `${environment.jwt.secreat}`, {
      expiresIn: 60 * 60 * 60 * 2,
    })}`;
  }

  /**
   * throw Error to user
   */
  private invalidToken() {
    throw new Error("Invalid Token");
  }

  /**
   * extract token from authrization header
   * @param token
   */
  public extractToken(token: string): string {
    return token.split(" ")[1];
  }

  /**
   *
   * @param token verify jwt token
   */
  public verifyToken(token: string) {
    return jwt.verify(token, `${environment.jwt.secreat}`);
  }

  /**
   *
   * @param req extract userId and token from the request
   */
  public extractUserIdfromReq(req: Request): any {
    if (req) {
      const headers = req && req.headers;

      if (
        headers &&
        headers["authorization"] &&
        headers["authorization"] != "null"
      ) {
        try {
          const authorization = headers["authorization"];
          const extractedToken: any = this.extractToken(
            authorization.toString(),
          );
          const jwtPayload: any = this.verifyToken(extractedToken);

          return {
            userId: jwtPayload && jwtPayload.payload,
            token: authorization,
          };
        } catch (error) {
          throw this.invalidToken();
        }
      } else {
        throw new Error("No header found!");
      }
    } else {
      throw this.invalidToken();
    }
  }

  // singleTon object for whole application
  public static getInstance(): JWTRepository {
    if (!JWTRepository.instance) {
      JWTRepository.instance = new JWTRepository();
    }
    return JWTRepository.instance;
  }
}

export { JWTRepository };
