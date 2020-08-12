import config from "../config";
import { Server, BodyParser, Application } from "../server/CoreModules";
import BaseController from "../../adapters/controllers/BaseController";
import localization from "../middlewares/localization";
import handleError from "../middlewares/handleError";

export default class App {
  public app: Application;

  constructor(controllers: BaseController[]) {
    this.app = Server();
    this.LoadMiddlewares();
    this.LoadControllers(controllers);
    this.LoadHandleError();
  }

  public LoadMiddlewares(): void {
    this.app.use(BodyParser.json());
    this.app.use(localization());
  }

  private LoadControllers(controllers: BaseController[]): void {
    controllers.forEach((controller) => {
      this.app.use(config.server.root, controller.router);
    });
  }

  private LoadHandleError(): void {
    this.app.use(handleError());
  }

  public Listen(): void {
    this.app.listen(config.server.port, () => {
      console.log(`Server running on ${config.server.host}:${config.server.port}`);
    });
  }
}
