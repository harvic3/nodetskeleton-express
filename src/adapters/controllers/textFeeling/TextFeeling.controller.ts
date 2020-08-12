import BaseController from "../BaseController";
import { Request, Response, NextFunction } from "../../../infrastructure/server/CoreModules";
import { TextDto } from "../../../application/modules/feeling/dtos/TextReq.dto";
import {
  getFeelingTextUseCase,
  getHighestFeelingSentenceUseCase,
  getLowestFeelingSentenceUseCase,
} from "./container/index";

class TextFeelingController extends BaseController {
  public constructor() {
    super();
    this.InitializeRoutes();
  }

  private InitializeRoutes() {
    this.router.post("/feeling", this.GetFeelingText);
    this.router.post("/feeling/highest", this.GetHighestFeelingSentence);
    this.router.post("/feeling/lowest", this.GetHighestFeelingSentence);
  }

  GetFeelingText = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const textDto: TextDto = req.body;
      this.HandleResult(res, await getFeelingTextUseCase.Execute(textDto));
    } catch (error) {
      next(error);
    }
  };
  GetHighestFeelingSentence = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const textDto: TextDto = req.body;
      this.HandleResult(res, await getHighestFeelingSentenceUseCase.Execute(textDto));
    } catch (error) {
      next(error);
    }
  };
  GetLowestFeelingSentence = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const textDto: TextDto = req.body;
      this.HandleResult(res, await getLowestFeelingSentenceUseCase.Execute(textDto));
    } catch (error) {
      next(error);
    }
  };
}

const instance = new TextFeelingController();

export default instance;
