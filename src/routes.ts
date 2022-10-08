import { Express, Request, Response } from "express";
import { eventEmitter } from "./app";

export default function(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    let info: string = eventEmitter.emit('defaultPath');
    res.send(info);
  });

  app.get("/home", (req: Request, res: Response) => res.sendStatus(200));

}