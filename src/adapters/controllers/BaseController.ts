export { Request, Response, NextFunction } from "../../infrastructure/server/CoreModules";
import { Router, Response, RouterType } from "../../infrastructure/server/CoreModules";
import { IResult } from "result-tsk";

export default class BaseController {
  constructor() {
    this.router = Router();
  }
  router: RouterType;
  HandleResult(res: Response, result: IResult): void {
    if (result.success) {
      res
        .status(result.statusCode)
        .json(result.message ? result.ToResultDto() : result.ToResultDto().data);
    } else {
      res.status(result.statusCode).json(result.ToResultDto());
    }
  }
}
